from peewee import *
import datetime
from flask_login import UserMixin
import sqlite3

DATABASE = SqliteDatabase('keebhoard.sqlite')

class BaseModel(Model):
    class Meta:
        database = DATABASE

class User(UserMixin, BaseModel):
    id = AutoField()
    username = CharField(unique=True)
    email = CharField(unique=True)
    password = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)
    # Build.id= AutoField()
    # Keyboard.id = AutoField()
    # Switch.id = AutoField()
    # Stabilizer.id = AutoField()
    # Keycap.id = AutoField()

class Keyboard(BaseModel):
    name = CharField()
    size = CharField()
    id = AutoField()
    created_at = DateTimeField(default=datetime.datetime.now)
    name = CharField()
    size = IntegerField()
    case_material = CharField()
    connectivity = CharField()
    backlit = CharField()
    knob = BooleanField()
    # compatibility = [CharField()]

class Switch(BaseModel):
    id = AutoField()
    created_at = DateTimeField(default=datetime.datetime.now)
    name = CharField()
    type = CharField()
    facing = CharField()
    pins = IntegerField()
    actuation_force = IntegerField()
    #compatibility = [CharField()]

class Stabilizer(BaseModel):
    id = AutoField()
    created_at = DateTimeField(default=datetime.datetime.now)
    name = CharField()
    type = CharField()
    #compatibility = [CharField()]

class Keycap(BaseModel):
    id = AutoField()
    name = CharField()
    material = CharField()
    profile = CharField()
    legend = CharField()
    #compatibility = [CharField()]

# class Build(BaseModel):
#     build_id = AutoField()
#     keyboard_id = AutoField()
#     switch_id = AutoField()
#     stabilizer_id = AutoField()
#     keycap_id = AutoField()

def initialize():
    DATABASE.connect()
    DATABASE.create_tables([User, Keyboard, Switch, Stabilizer, Keycap], safe=True)
    # DATABASE.create_tables([Build], safe=True)
    print('Connected to the DB and created tables if they dont already exist')
    DATABASE.close()

# def delete_tables():
#     conn = sqlite3.connect('keebhoard.sqlite')
#     conn.execute('PRAGMA foreign_keys = OFF')
#     conn.execute('DROP TABLE IF EXISTS user')
#     conn.execute('DROP TABLE IF EXISTS keyboard')
#     conn.execute('DROP TABLE IF EXISTS switch')
#     conn.execute('DROP TABLE IF EXISTS stabilizer')
#     # conn.execute('DROP TABLE IF EXISTS build')
#     conn.commit()
#     conn.close()
# delete_tables()
