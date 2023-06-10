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

@keyboards.route('/<id>', methods=['GET'])
def get_one_keyboard(id):
    keyboard = models.Keyboard.get_by_id(id)
    print(keyboard)
    return jsonify(
        data=model_to_dict(keyboard),
        message="Success!",
        status=200
    ), 200

@keyboards.route('/<keyboard_id>', methods=['PUT'])
def update_keyboards(keyboard_id):
    payload = request.get_json()
    print(payload)

    models.Keyboard.update(**payload).where(models.Keyboard.keyboard_id == keyboard_id).execute()

    return jsonify(
        data=model_to_dict(models.Keyboard.get_by_id(keyboard_id)),
        message="resource updated successfully",
        status=200
    ), 200

@keyboards.route('/<keyboard_id>',  methods=['DELETE'])
def delete_keyboard(keyboard_id):
    delete_query = models.Keyboard.delete().where(models.Keyboard.keyboard_id == keyboard_id)
    nums_of_rows_deleted = delete_query.execute()
    print(nums_of_rows_deleted)
    return jsonify(
        data={},
        message=f"Successfully deleted {nums_of_rows_deleted} keyboard with keyboard_id {keyboard_id}",
        status=200
    ), 200