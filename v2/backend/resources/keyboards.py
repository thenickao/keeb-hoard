import models
from flask import Blueprint, request, jsonify
from playhouse.shortcuts import model_to_dict

keyboards = Blueprint('keyboards', 'keyboards')

@keyboards.route('/', methods=['GET'])
def keyboards_index():
    result = models.Keyboard.select()
    print('results of keyboard select query')
    print(result)

    keyboard_dicts = [model_to_dict(keyboard) for keyboard in result]
    
    return jsonify({
        'data': keyboard_dicts,
        'message': f"Successfully found {len(keyboard_dicts)} keyboards",
        'status': 200
    }), 200

@keyboards.route('/', methods=['POST'])
def create_keyboards():
    payload = request.get_json()
    print(payload)
    new_keyboards = models.Keyboard.create(name=payload['name'], size=payload['size'])
    print(new_keyboards)
    keyboard_dict = model_to_dict(new_keyboards)
    return jsonify(
        data=keyboard_dict,
        message="Successfully created keyboard!",
        status=201
    ), 201
    return "you hit the create route -- check terminal"