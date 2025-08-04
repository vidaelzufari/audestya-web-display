from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid
import os

# In-memory storage for testing (will be replaced by MongoDB later)
STATUS_CHECKS = []
CMS_PAGES = []
CMS_SETTINGS = {
    "id": str(uuid.uuid4()),
    "site_title": "Audestya Avocat",
    "site_description": "Cabinet d'avocat spécialisé en droit de la distribution",
    "contact_email": "haia.elzufari@audestya-avocat.com",
    "contact_phone": "+33685353781",
    "linkedin_url": "https://www.linkedin.com/in/haiaelzufari",
    "primary_color": "#1e40af",
    "secondary_color": "#3b82f6",
    "updated_at": datetime.utcnow().isoformat()
}

# Create FastAPI app
app = FastAPI(title="Audestya Avocat API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create API router
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
    STATUS_CHECKS.append(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    return [StatusCheck(**status_check) for status_check in STATUS_CHECKS]

# CMS Content Management Endpoints

@api_router.get("/cms/pages", response_model=List[ContentPage])
async def get_all_pages():
    """Get all content pages"""
    return [ContentPage(**page) for page in CMS_PAGES]

@api_router.get("/cms/pages/{slug}", response_model=ContentPage)
async def get_page_by_slug(slug: str):
    """Get a content page by slug"""
    page = next((page for page in CMS_PAGES if page["slug"] == slug), None)
    if not page:
        raise HTTPException(status_code=404, detail="Page not found")
    return ContentPage(**page)

@api_router.post("/cms/pages", response_model=ContentPage)
async def create_page(page_data: ContentPageCreate):
    """Create a new content page"""
    # Check if slug already exists
    existing_page = next((page for page in CMS_PAGES if page["slug"] == page_data.slug), None)
    if existing_page:
        raise HTTPException(status_code=400, detail="Page with this slug already exists")
    
    page_dict = page_data.dict()
    page_obj = ContentPage(**page_dict)
    CMS_PAGES.append(page_obj.dict())
    return page_obj

@api_router.put("/cms/pages/{slug}", response_model=ContentPage)
async def update_page(slug: str, page_data: ContentPageUpdate):
    """Update a content page"""
    page_index = next((i for i, page in enumerate(CMS_PAGES) if page["slug"] == slug), None)
    if page_index is None:
        raise HTTPException(status_code=404, detail="Page not found")
    
    # Prepare update data
    update_data = {k: v for k, v in page_data.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    # Update the page
    CMS_PAGES[page_index].update(update_data)
    
    # Return updated page
    return ContentPage(**CMS_PAGES[page_index])

@api_router.delete("/cms/pages/{slug}")
async def delete_page(slug: str):
    """Delete a content page"""
    page_index = next((i for i, page in enumerate(CMS_PAGES) if page["slug"] == slug), None)
    if page_index is None:
        raise HTTPException(status_code=404, detail="Page not found")
    
    CMS_PAGES.pop(page_index)
    return {"message": "Page deleted successfully"}

# CMS Settings Endpoints

@api_router.get("/cms/settings", response_model=CMSSettings)
async def get_cms_settings():
    """Get CMS settings"""
    return CMSSettings(**CMS_SETTINGS)

@api_router.put("/cms/settings", response_model=CMSSettings)
async def update_cms_settings(settings_data: CMSSettingsUpdate):
    """Update CMS settings"""
    global CMS_SETTINGS
    
    # Update existing settings
    update_data = {k: v for k, v in settings_data.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow().isoformat()
    
    CMS_SETTINGS.update(update_data)
    
    # Return updated settings
    return CMSSettings(**CMS_SETTINGS)

# Include the router in the main app
app.include_router(api_router)