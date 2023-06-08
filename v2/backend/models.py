from peewee import *
import datetime

DATABASE = SqliteDatabase('keebhoard.sqlite')

class BaseModel(Model):
    class Meta:
        database = DATABASE

class User(BaseModel):
    user_id = AutoField()
    username = CharField(unique=True)
    password = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

class Keyboard(BaseModel):
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
    DATABASE.create_tables([User], safe=True)
    DATABASE.create_tables([Keyboard], safe=True)
    DATABASE.create_tables([Switch], safe=True)
    DATABASE.create_tables([Stabilizer], safe=True)
    # DATABASE.create_tables([Build], safe=True)

    print('Connected to the DB and created tables if they dont already exist')
    DATABASE.close()