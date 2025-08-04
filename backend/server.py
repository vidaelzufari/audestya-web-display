from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# CMS Models
class ContentPage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str  # URL slug like 'presentation', 'actualites'
    title: str
    meta_description: str
    hero_title: str
    hero_description: str
    sections: List[dict] = Field(default_factory=list)
    status: str = Field(default="draft")  # draft, published
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ContentPageCreate(BaseModel):
    slug: str
    title: str
    meta_description: str
    hero_title: str
    hero_description: str
    sections: List[dict] = Field(default_factory=list)
    status: str = Field(default="draft")

class ContentPageUpdate(BaseModel):
    title: Optional[str] = None
    meta_description: Optional[str] = None  
    hero_title: Optional[str] = None
    hero_description: Optional[str] = None
    sections: Optional[List[dict]] = None
    status: Optional[str] = None

# CMS Settings Model
class CMSSettings(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    site_title: str
    site_description: str
    contact_email: str
    contact_phone: str
    linkedin_url: str
    logo_url: Optional[str] = None
    primary_color: str = Field(default="#1e40af")
    secondary_color: str = Field(default="#3b82f6")
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class CMSSettingsUpdate(BaseModel):
    site_title: Optional[str] = None
    site_description: Optional[str] = None
    contact_email: Optional[str] = None
    contact_phone: Optional[str] = None
    linkedin_url: Optional[str] = None
    logo_url: Optional[str] = None
    primary_color: Optional[str] = None
    secondary_color: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
