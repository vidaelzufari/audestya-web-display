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

# CMS Content Management Endpoints

@api_router.get("/cms/pages", response_model=List[ContentPage])
async def get_all_pages():
    """Get all content pages"""
    pages = await db.content_pages.find().to_list(100)
    return [ContentPage(**page) for page in pages]

@api_router.get("/cms/pages/{slug}", response_model=ContentPage)
async def get_page_by_slug(slug: str):
    """Get a content page by slug"""
    page = await db.content_pages.find_one({"slug": slug})
    if not page:
        raise HTTPException(status_code=404, detail="Page not found")
    return ContentPage(**page)

@api_router.post("/cms/pages", response_model=ContentPage)
async def create_page(page_data: ContentPageCreate):
    """Create a new content page"""
    # Check if slug already exists
    existing_page = await db.content_pages.find_one({"slug": page_data.slug})
    if existing_page:
        raise HTTPException(status_code=400, detail="Page with this slug already exists")
    
    page_dict = page_data.dict()
    page_obj = ContentPage(**page_dict)
    await db.content_pages.insert_one(page_obj.dict())
    return page_obj

@api_router.put("/cms/pages/{slug}", response_model=ContentPage)
async def update_page(slug: str, page_data: ContentPageUpdate):
    """Update a content page"""
    existing_page = await db.content_pages.find_one({"slug": slug})
    if not existing_page:
        raise HTTPException(status_code=404, detail="Page not found")
    
    # Prepare update data
    update_data = {k: v for k, v in page_data.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    # Update the page
    await db.content_pages.update_one({"slug": slug}, {"$set": update_data})
    
    # Return updated page
    updated_page = await db.content_pages.find_one({"slug": slug})
    return ContentPage(**updated_page)

@api_router.delete("/cms/pages/{slug}")
async def delete_page(slug: str):
    """Delete a content page"""
    result = await db.content_pages.delete_one({"slug": slug})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Page not found")
    return {"message": "Page deleted successfully"}

# CMS Settings Endpoints

@api_router.get("/cms/settings", response_model=CMSSettings)
async def get_cms_settings():
    """Get CMS settings"""
    settings = await db.cms_settings.find_one()
    if not settings:
        # Return default settings if none exist
        default_settings = CMSSettings(
            site_title="Audestya Avocat",
            site_description="Cabinet d'avocat spécialisé en droit de la distribution",
            contact_email="haia.elzufari@audestya-avocat.com",
            contact_phone="+33685353781",
            linkedin_url="https://www.linkedin.com/in/haiaelzufari"
        )
        await db.cms_settings.insert_one(default_settings.dict())
        return default_settings
    return CMSSettings(**settings)

@api_router.put("/cms/settings", response_model=CMSSettings)
async def update_cms_settings(settings_data: CMSSettingsUpdate):
    """Update CMS settings"""
    existing_settings = await db.cms_settings.find_one()
    
    if not existing_settings:
        # Create new settings if none exist
        update_data = {k: v for k, v in settings_data.dict().items() if v is not None}
        settings_obj = CMSSettings(**update_data)
        await db.cms_settings.insert_one(settings_obj.dict())
        return settings_obj
    else:
        # Update existing settings
        update_data = {k: v for k, v in settings_data.dict().items() if v is not None}
        update_data["updated_at"] = datetime.utcnow()
        
        await db.cms_settings.update_one({"_id": existing_settings["_id"]}, {"$set": update_data})
        
        # Return updated settings
        updated_settings = await db.cms_settings.find_one()
        return CMSSettings(**updated_settings)

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
