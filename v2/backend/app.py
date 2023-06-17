from flask import Flask, jsonify, g
from resources.users import users
from resources.keyboards import keyboards
from resources.keyboards import keyboard
from resources.switches import switches
from resources.switches import switch
from resources.stabilizers import stabilizers
from resources.stabilizers import stabilizer
from resources.keycaps import keycaps
from resources.keycaps import keycap
import models
from flask_cors import CORS
from flask_login import LoginManager
# from flask_jwt_extended import JWTManager

login_manager = LoginManager()

DEBUG=True
PORT=8000
app = Flask(__name__)
CORS(app)

app.secret_key = "LJAKLJLKJJLJKLSDJLKJASD"
login_manager.init_app(app)

@login_manager.user_loader
def load_user(id):
    try:
        return models.User.get(models.User.id == id)
    except models.DoesNotExist:
        return None

@login_manager.user_loader
def load_user(user_id):
    return models.User.get(models.User.id == id)

@app.before_request
def before_request():
    g.db = models.DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    g.db.close()
    return response

    
CORS(users, origins=["http://localhost:3000"], supports_credentials=True)
app.register_blueprint(users, url_prefix="/user")

CORS(keyboards, origins=["http://localhost:3000"], supports_credentials=True)
app.register_blueprint(keyboards, url_prefix="/keyboard")

# CORS(keyboard, origins=["http://localhost:3000"], supports_credentials=True)
# app.register_blueprint(keyboard, url_prefix="/keyboard")

CORS(switches, origins=["http://localhost:3000"], supports_credentials=True)
app.register_blueprint(switches, url_prefix="/switch")

CORS(stabilizers, origins=["http://localhost:3000"], supports_credentials=True)
app.register_blueprint(stabilizers, url_prefix="/stabilizer")

CORS(keycaps, origins=["http://localhost:3000"], supports_credentials=True)
app.register_blueprint(keycaps, url_prefix="/keycap")


# @app.route("/")
# def home():
#     return jsonify("Hello, this is home.")

# @app.route("/<keyboard>")
# def keyboard(keyboard):
#     return f"This is {keyboard}"

# @app.route("/keyboards")
# def keyboards():
#     return {"This is the keyboards test": ["keyboard1", "keyboard2", "keyboard3"]}

# @app.route("/<keyboard>")
# def keyboard(keyboard):
#     data = {"message": f"This is {keyboard}"}
#     return jsonify(data)


if __name__ == "__main__":
    models.initialize()
    app.run(debug=DEBUG, port=PORT)

# if __name__ == "__main__":
#     models.delete_tables()
#     app.run(debug=DEBUG, port=PORT)