from peewee import *
import datetime

DATABASE = SqliteDatabase('keebhoard.sqlite')

class User(Model):
    user_id = AutoField()
    username = AutoField()
    password = AutoField()
    build_id= AutoField()
    keyboard_id = AutoField()
    switch_id = AutoField()
    stabilizer_id = AutoField()
    keycap_id = AutoField()

class Keyboard(Model):
    keyboard_id = AutoField()
    keyboard_name = Charfield()
    size = PositiveSmallIntegerField()
    case_material = Charfield()
    connectivity = Charfield()
    backlit = Charfield()
    knob = BooleanField
    compatibility = ArrayField(CharField())

class Switch(Model):
    switch_id = AutoField()
    switch_name = Charfield()
    category = Charfield()
    facing = Charfield()
    pins = PositiveSmallIntegerField()
    actuation_force = PositiveSmallIntegerField()
    compatibility = ArrayField(CharField())

class Stabilizer(Model):
    stabilizer_id = AutoField()
    stabilizer_name = Charfield()
    compatibility = ArrayField(CharField())

class Keycap(Model):
    keycap_id = AutoField()
    keycap_name = Charfield()
    keycap_material = Charfield()
    legend = Charfield()
    compatibility = ArrayField(CharField())

class Build(Model):
    build_id = AutoField()
    keyboard_id = AutoField()
    switch_id = AutoField()
    stabilizer_id = AutoField()
    keycap_id = AutoField()