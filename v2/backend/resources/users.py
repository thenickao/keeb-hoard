import models
from flask import request, jsonify, Blueprint
from flask_bcrypt import generate_password_hash, check_password_hash
from flask_login import login_user, current_user, logout_user
from playhouse.shortcuts import model_to_dict


users = Blueprint('users', 'users')

@users.route('/register', methods=["POST"])
def register():
    payload = request.get_json()
    payload['email'] = payload['email'].lower()
    try:
        models.User.get(models.User.email == payload['email'])
        return jsonify(
            data={},
            status={"code": 401, "message": "User with that name already exists"}
            )
    except models.DoesNotExist:
        payload['password'] = generate_password_hash(payload['password'])
        user = models.User.create(**payload)
        login_user(user)
        user_dict = model_to_dict(user)
        del user_dict['password']
        return jsonify(
            data=user_dict,
            status={"code": 201, "message": "User created successfully"}
        )

@users.route('/login', methods=["POST"])
def login():
    payload = request.get_json()
    print('payload:', payload)
    try:
        user = models.User.get(models.User.email == payload['email'])
        user_dict = model_to_dict(user)
        if(check_password_hash(user_dict['password'], payload['password'])):
            del user_dict['password']
            login_user(user)
            print(user, ' this is user')
            return jsonify(data=user_dict, status={"code": 200, "message": "Success"})
        else:
            return jsonify(data={}, status={"code": 401, "message": "Username or Password is incorrect"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 401, "message": "Username or Password is incorrect"})
    
@users.route('/logout', methods=["GET"])
def logout():
    logout_user()
    return jsonify(
        data={},
        status=200,
        message= 'successful logout'
    ), 200

@users.route('/', methods=['GET'])
# @login_required
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

@users.route('/delete/<id>',  methods=['DELETE'])
def delete_user(id):
    delete_query = models.User.delete().where(models.User.id == id)
    nums_of_rows_deleted = delete_query.execute()
    print(nums_of_rows_deleted)
    return jsonify(
        data={},
        message=f"Successfully deleted {nums_of_rows_deleted} user with id {id}",
        status=200
    ), 200