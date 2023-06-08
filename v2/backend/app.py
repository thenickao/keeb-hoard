from flask import Flask, jsonify
from resources.keyboards import keyboards
import models
from flask_cors import CORS

DEBUG=True
PORT=8000
app = Flask(__name__)

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

