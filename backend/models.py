from peewee import *
import datetime

DATABASE = SqliteDatabase('keebhoard.sqlite')

class BaseModel(Model):
    class Meta:
        database = DATABASE

class User(BaseModel):
    user_id = AutoField()
    username = AutoField()
    password = AutoField()
    build_id= AutoField()
    keyboard_id = AutoField()
    switch_id = AutoField()
    stabilizer_id = AutoField()
    keycap_id = AutoField()

class Keyboard(BaseModel):
    keyboard_id = AutoField()
    keyboard_name = Charfield()
    size = PositiveSmallIntegerField()
    case_material = Charfield()
    connectivity = Charfield()
    backlit = Charfield()
    knob = BooleanField
    compatibility = ArrayField(CharField())

class Switch(BaseModel):
    switch_id = AutoField()
    switch_name = Charfield()
    category = Charfield()
    facing = Charfield()
    pins = PositiveSmallIntegerField()
    actuation_force = PositiveSmallIntegerField()
    compatibility = ArrayField(CharField())

class Stabilizer(BaseModel):
    stabilizer_id = AutoField()
    stabilizer_name = Charfield()
    compatibility = ArrayField(CharField())

class Keycap(BaseModel):
    keycap_id = AutoField()
    keycap_name = Charfield()
    keycap_material = Charfield()
    legend = Charfield()
    compatibility = ArrayField(CharField())

class Build(BaseModel):
    build_id = AutoField()
    keyboard_id = AutoField()
    switch_id = AutoField()
    stabilizer_id = AutoField()
    keycap_id = AutoField()

def initialize():
    DATABASE.connect()
    DATABASE.create_tables([User], safe=True)
    DATABASE.create_tables([Keyboard], safe=True)
    DATABASE.create_tables([Switch], safe=True)
    DATABASE.create_tables([Stabilizer], safe=True)
    DATABASE.create_tables([Keycap], safe=True)
    DATABASE.create_tables([Build], safe=True)

    print("Connected to the Database and created tables if they don't already exist")
    DATABASE.close()