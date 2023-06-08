from flask import Flask, jsonify
from resources.users import users
import models
from flask_cors import CORS

DEBUG=True
PORT=8000
app = Flask(__name__)

CORS(users, origins=['http://localhost:3000'], supports_credentials=True)

app.register_blueprint(users, url_prefix='/api/v1/users')

@app.route('/')
def home():
    return jsonify('Hello, this is home.')

@app.route('/<keyboard>')
def keyboard(keyboard):
    return f"This is {keyboard}"



if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)

