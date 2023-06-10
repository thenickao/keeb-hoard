from peewee import *
import datetime
from flask_login import UserMixin
import sqlite3

DATABASE = SqliteDatabase('keebhoard.sqlite')

class BaseModel(Model):
    class Meta:
        database = DATABASE

class User(UserMixin, BaseModel):
    user_id = AutoField()
    username = CharField(unique=True)
    email = CharField(unique=True)
    password = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

class Keyboard(BaseModel):
    name = CharField()
    size = CharField()
    keyboard_id = AutoField()
    created_at = DateTimeField(default=datetime.datetime.now)

class Switch(BaseModel):
    switch_id = AutoField()
    created_at = DateTimeField(default=datetime.datetime.now)

class Stabilizer(BaseModel):
    stabilizer_id = AutoField()
    created_at = DateTimeField(default=datetime.datetime.now)

# class Build(BaseModel):
#     build_id = AutoField()
#     keyboard_id = AutoField()
#     switch_id = AutoField()
#     stabilizer_id = AutoField()

def initialize():
    DATABASE.connect()
    DATABASE.create_tables([User, Keyboard, Switch, Stabilizer], safe=True)
    # DATABASE.create_tables([Build], safe=True)

    print('Connected to the DB and created tables if they dont already exist')
    DATABASE.close()

# def delete_tables():
#     conn = sqlite3.connect('keebhoard.sqlite')  # Replace with your database file path or name

#     # Disable foreign key constraints (optional)
#     conn.execute('PRAGMA foreign_keys = OFF')

#     # Drop tables
#     conn.execute('DROP TABLE IF EXISTS user')
#     conn.execute('DROP TABLE IF EXISTS keyboard')
#     conn.execute('DROP TABLE IF EXISTS switch')
#     conn.execute('DROP TABLE IF EXISTS stabilizer')
#     # conn.execute('DROP TABLE IF EXISTS build')

#     # Commit the changes
#     conn.commit()

#     # Close the connection
#     conn.close()

# # Call the function to delete the tables
# delete_tables()
