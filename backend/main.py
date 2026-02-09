from fastapi import FastAPI
from routers.user_router import router as user_router
from core.config import APP_NAME
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title=APP_NAME)

# Allow React to talk with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)

@app.get("/")
def root():
    return {"message": "Backend running"}
