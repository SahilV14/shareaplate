from cmath import cos, asin, sqrt

from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta
from typing import Annotated
from fastapi import Depends, FastAPI, HTTPException, status, Form
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
import secrets , json
from backend.database import *



app = FastAPI()
app.add_middleware(CORSMiddleware , allow_origins = ["http://localhost:8080"] , allow_credentials = True , allow_headers = ['*'] , allow_methods = ['*'])
SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 12000
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


async def get_donor(phone: int):
    if not checkDonorUsed(phone):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User doesnt exist"
        )
    user = get_donor_details(phone)
    return user


async def authenticate_user(phone: int, password: str):
    user : Donor = await get_donor(phone)
    if not user:
        return False
    if not verify_password(password, user.password):
        return False
    return user


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


@app.post("/tokenDonor")
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()]
):

    donor = await authenticate_user(int(form_data.username), form_data.password)
    if not donor:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": str(donor.phone) }, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/registerDonor")
async def createDonor(name : str = Form(...) , organization : str = Form(...) , email_id : str = Form(...) , phone : int = Form(...) , password : str = Form(...)):
    if checkDonorUsed(phone):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="User already exists"
        )
    hashed = get_password_hash(password)
    create_donor_db(Donor(email_id = email_id , name = name , organization = organization , phone = phone , password = hashed))
    return status.HTTP_201_CREATED

@app.post("/addItem")
def add_item(name : str = Form(...) , qty : int = Form(...) , type : int = Form(...) , expiry : int = Form(...) , pickup_coordinates_x : float = Form(...) , pickup_coordinates_y : float = Form(...) , donor_token : str = Form(...) , area : str = Form(...)):
    payload = jwt.decode(donor_token, SECRET_KEY, algorithms=[ALGORITHM])
    donor_phone = payload.get("sub")
    create_item_db(Items(name = name , qty = qty , type = type , expiry = expiry , pickup_coordinates_x = pickup_coordinates_x , pickup_coordinates_y = pickup_coordinates_y , donor_phone = donor_phone , isPickedUp = False , area = area))

@app.get("/allItems")
def get_all_items():
    return {"items" : get_all_items_db()}

def distance(lat1, lon1, lat2, lon2):
    p = 0.017453292519943295
    hav = 0.5 - cos((lat2-lat1)*p)/2 + cos(lat1*p)*cos(lat2*p) * (1-cos((lon2-lon1)*p)) / 2
    return 12742 * asin(sqrt(hav))

@app.post("/closestItems")
def get_closest_items(area_name : str = Form(...)):
    all_items : list[Items] = get_all_items_db()
    all_items_sorted = sorted(all_items , key = lambda x : x.area.lower() == area_name.lower())
    return {"items" : all_items_sorted}

@app.post("/myItems")
def get_my_items(donor_token : str = Form(...)):
    payload = jwt.decode(donor_token, SECRET_KEY, algorithms=[ALGORITHM])
    donor_phone = payload.get("sub")
    return {"items" : get_donor_items(int(donor_phone))}


@app.get("/")
def default():
    return {"res" : "Hello World"}