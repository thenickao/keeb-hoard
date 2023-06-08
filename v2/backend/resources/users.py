import models
from flask import Blueprint, request, jsonify
from playhouse.shortcuts import model_to_dict

users = Blueprint('users', 'users')

@users.route('/', methods=['GET'])
def users_index():
    result = models.User.select()
    print('results of user select query')
    print(result)

    user_dicts = [model_to_dict(user) for user in result]
    
    return jsonify({
        'data': user_dicts,
        'message': f"Successfully found {len(user_dicts)} users",
        'status': 200
    }), 200

@users.route('/', methods=['POST'])
def create_users():
    payload = request.get_json()
    print(payload)
    new_user = models.User.create(username=payload['username'], password=payload['password'])
    print(new_user)
    user_dict = model_to_dict(new_user)
    return jsonify(
        data=user_dict,
        message="Successfully created user!",
        status=201
    ), 201
    return "you hit the create route -- check terminal"