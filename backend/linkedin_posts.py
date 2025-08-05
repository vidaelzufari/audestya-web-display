from fastapi import HTTPException
import httpx
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class LinkedInPost(BaseModel):
    id: str
    author: str
    created_at: datetime
    text: str
    visibility: str
    engagement: Optional[dict] = None

class LinkedInPostsService:
    def __init__(self):
        self.base_url = "https://api.linkedin.com"
        self.posts_endpoint = f"{self.base_url}/rest/posts"
        self.ugc_posts_endpoint = f"{self.base_url}/v2/ugcPosts"

    async def get_user_posts(self, access_token: str, user_urn: str, limit: int = 10) -> List[LinkedInPost]:
        """Retrieve user posts from LinkedIn API"""
        async with httpx.AsyncClient() as client:
            headers = {
                "Authorization": f"Bearer {access_token}",
                "X-Restli-Protocol-Version": "2.0.0",
                "LinkedIn-Version": "202210"
            }
            
            # Use UGC Posts API for retrieving user posts
            params = {
                "q": "authors",
                "authors": f"List({user_urn})",
                "sortBy": "LAST_MODIFIED",
                "count": limit
            }
            
            response = await client.get(self.ugc_posts_endpoint, headers=headers, params=params)
            
            if response.status_code != 200:
                raise HTTPException(status_code=400, detail=f"Failed to retrieve posts: {response.text}")
            
            posts_data = response.json()
            return self._parse_posts_response(posts_data)

    def _parse_posts_response(self, response_data: dict) -> List[LinkedInPost]:
        """Parse LinkedIn API response into LinkedInPost objects"""
        posts = []
        elements = response_data.get("elements", [])
        
        for element in elements:
            try:
                post = LinkedInPost(
                    id=element.get("id", ""),
                    author=element.get("author", ""),
                    created_at=datetime.fromtimestamp(element.get("created", 0) / 1000),
                    text=self._extract_post_text(element),
                    visibility=element.get("visibility", {}).get("com.linkedin.ugc.MemberNetworkVisibility", "UNKNOWN"),
                    engagement=self._extract_engagement_data(element)
                )
                posts.append(post)
            except Exception as e:
                # Log error but continue processing other posts
                print(f"Error parsing post: {e}")
                continue
        
        return posts

    def _extract_post_text(self, element: dict) -> str:
        """Extract text content from post element"""
        specific_content = element.get("specificContent", {})
        share_content = specific_content.get("com.linkedin.ugc.ShareContent", {})
        commentary = share_content.get("shareCommentary", {})
        return commentary.get("text", "")

    def _extract_engagement_data(self, element: dict) -> dict:
        """Extract engagement metrics if available"""
        return {
            "likes": element.get("numLikes", 0),
            "comments": element.get("numComments", 0),
            "shares": element.get("numShares", 0)
        }

# Create service instance
linkedin_posts = LinkedInPostsService()