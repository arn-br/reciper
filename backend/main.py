from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
from schema import schema
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
graphql_app = GraphQLRouter(schema)

app.include_router(graphql_app, prefix="/graphql")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)