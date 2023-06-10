from flask import Flask, jsonify, g
from resources.keyboards import keyboards
from resources.users import users
import models
from flask_cors import CORS
from flask_login import LoginManager

login_manager = LoginManager()

DEBUG=True
PORT=8000
app = Flask(__name__)

app.secret_key = "LJAKLJLKJJLJKLSDJLKJASD"
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    try:
        return models.User.get(models.User.user_id == user_id)
    except models.DoesNotExist:
        return None

@login_manager.user_loader
def load_user(user_id):
    return models.User.get(models.User.user_id == user_id)

@app.before_request
def before_request():
    g.db = models.DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    g.db.close()
    return response

CORS(users, origins=['http://localhost:3000'], supports_credentials=True)
app.register_blueprint(users, url_prefix='/user')

CORS(keyboards, origins=['http://localhost:3000'], supports_credentials=True)
app.register_blueprint(keyboards, url_prefix='/api/v1/keyboards')

@app.route('/')
def home():
    return jsonify('Hello, this is home.')

@app.route('/<keyboard>')
def keyboard(keyboard):
    return f"This is {keyboard}"



if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)


# if __name__ == '__main__':
#     models.delete_tables()
#     app.run(debug=DEBUG, port=PORT)