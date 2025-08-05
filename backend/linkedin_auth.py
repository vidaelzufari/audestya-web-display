from fastapi import HTTPException
import httpx
import os
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

# LinkedIn API Configuration
LINKEDIN_CLIENT_ID = os.getenv("LINKEDIN_CLIENT_ID")
LINKEDIN_CLIENT_SECRET = os.getenv("LINKEDIN_CLIENT_SECRET") 
LINKEDIN_REDIRECT_URI = os.getenv("LINKEDIN_REDIRECT_URI")

class LinkedInProfile(BaseModel):
    id: str
    name: str
    email: str
    picture: Optional[str] = None

class LinkedInAuthService:
    def __init__(self):
        self.client_id = LINKEDIN_CLIENT_ID
        self.client_secret = LINKEDIN_CLIENT_SECRET
        self.redirect_uri = LINKEDIN_REDIRECT_URI
        self.auth_url = "https://www.linkedin.com/oauth/v2/authorization"
        self.token_url = "https://www.linkedin.com/oauth/v2/accessToken"
        self.scope = "openid profile email w_member_social r_liteprofile"
        
        if not all([self.client_id, self.client_secret, self.redirect_uri]):
            raise ValueError("LinkedIn credentials not properly configured")

    def get_authorization_url(self, state: str = None) -> str:
        """Generate LinkedIn authorization URL"""
        params = {
            "response_type": "code",
            "client_id": self.client_id,
            "redirect_uri": self.redirect_uri,
            "scope": self.scope,
        }
        if state:
            params["state"] = state
        
        query_string = "&".join([f"{k}={v}" for k, v in params.items()])
        return f"{self.auth_url}?{query_string}"

    async def exchange_code_for_token(self, authorization_code: str) -> dict:
        """Exchange authorization code for access token"""
        async with httpx.AsyncClient() as client:
            data = {
                "grant_type": "authorization_code",
                "code": authorization_code,
                "redirect_uri": self.redirect_uri,
                "client_id": self.client_id,
                "client_secret": self.client_secret,
            }
            
            headers = {"Content-Type": "application/x-www-form-urlencoded"}
            response = await client.post(self.token_url, data=data, headers=headers)
            
            if response.status_code != 200:
                raise HTTPException(status_code=400, detail=f"Failed to obtain access token: {response.text}")
            
            return response.json()

    async def get_user_profile(self, access_token: str) -> LinkedInProfile:
        """Retrieve user profile information"""
        async with httpx.AsyncClient() as client:
            headers = {"Authorization": f"Bearer {access_token}"}
            response = await client.get("https://api.linkedin.com/v2/userinfo", headers=headers)
            
            if response.status_code != 200:
                raise HTTPException(status_code=400, detail=f"Failed to retrieve user profile: {response.text}")
            
            user_data = response.json()
            return LinkedInProfile(
                id=user_data["sub"],
                name=user_data["name"],
                email=user_data["email"],
                picture=user_data.get("picture")
            )

# Create service instance
linkedin_auth = LinkedInAuthService()