from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
from schema import schema
from fastapi.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

app = FastAPI()
app.mount("/static", StaticFiles(directory="../frontend/dist", html=True), name="static")
graphql_app = GraphQLRouter(schema)

app.include_router(graphql_app, prefix="/graphql")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:8000",
        "http://localhost:8000",
        "http://localhost:3000",  # Vite dev server
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
@app.get("/{full_path:path}")
async def serve_frontend(full_path: str = ""):
    index_path = os.path.join("../frontend/dist", "index.html")
    return FileResponse(index_path)