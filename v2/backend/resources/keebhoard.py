import models
from flask import Blueprint

keebhoard = Blueprint('keebhoard', 'keebhoard')

@keebhoard.route('/')
def keebhoard_index():
    return "keebhoard resource working"