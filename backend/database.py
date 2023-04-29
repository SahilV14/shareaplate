import os
import pymongo as pymongo
from pymongo.server_api import ServerApi
from fastapi.encoders import jsonable_encoder
from backend.models import *

client = pymongo.MongoClient(os.getenv("mongo_db_url") , server_api=ServerApi('1'))
db = client.shareaplate
donor = db.donor
items = db.items

def checkDonorUsed(phone : int):
    query = {"phone" : phone}
    res = list(donor.find(query))
    if len(res) == 0:
        return False
    return True

def create_donor_db(donor_in : Donor):
    donor.insert_one(jsonable_encoder(donor_in))

def get_donor_details(phone : int):
    query = {"phone": phone}
    res = list(donor.find(query))
    return Donor(**res[0])

def create_item_db(item_in : Items):
    items.insert_one(jsonable_encoder(item_in))