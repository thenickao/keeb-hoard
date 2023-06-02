from flask import Flask, jsonify

DEBUG = True

PORT = 8000

app = Flask(__name__)

@app.route('/home')
def home():
    return 'this is home'

@app.route('/components')
def components():
    return 'this is components'

@app.route('/components/switches')
def switches():
    return 'this is switches'

@app.route('/components/switches/<switch_id>')
def switch(switch_id):
    return f"this is switch {switch_id}"

if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)