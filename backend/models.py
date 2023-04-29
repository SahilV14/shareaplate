from pydantic import BaseModel
from dotenv import load_dotenv
import os

load_dotenv("./variable.env")

class Donor(BaseModel):
    email_id : str | None = None
    organization : str | None = None
    name : str | None = None
    phone : int | None = None
    password : str | None = None

#type : {0 : "Veg" , 1 : "Non-veg" , 2 : "Jain"}

class Items(BaseModel):
    name : str | None = None
    qty : float | None = None
    type : str | None = None
    expiry : int | None = None
    pickup_coordinates_x : str | None = None
    pickup_coordinates_y : str | None = None
    isPickedUp : bool | None = None
    donor_phone : int | None = None

class Reviews(BaseModel):
    no_stars : int | None = None
    message : str | None = None
    donor_phone : int | None = None

