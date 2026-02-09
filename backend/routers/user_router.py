from fastapi import APIRouter
from schemas.user_schema import User
from db.fake_db import users_db

router = APIRouter(prefix="/users", tags=["Users"])

# CREATE
@router.post("/")
def create_user(user: User):
    users_db.append(user)
    return {"message": "User added", "data": user}

# READ
@router.get("/")
def get_users():
    return users_db

# UPDATE
@router.put("/{user_id}")
def update_user(user_id: int, updated_user: User):
    for index, user in enumerate(users_db):
        if user.id == user_id:
            users_db[index] = updated_user
            return {"message": "User updated"}
    return {"error": "User not found"}

# DELETE
@router.delete("/{user_id}")
def delete_user(user_id: int):
    for user in users_db:
        if user.id == user_id:
            users_db.remove(user)
            return {"message": "User deleted"}
    return {"error": "User not found"}
