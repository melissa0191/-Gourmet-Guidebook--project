from flask import request, make_response, session, jsonify
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

from config import app, api, db

from models import Recipe, Rating, Category , User




# Define routes
@app.route('/')
def index():
    return jsonify({'message': 'Welcome to Recipe Manager!'})

@app.route('/users/', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{'id': user.id, 'username': user.username, 'email': user.email} for user in users])

@app.route('/users/', methods=['POST'])
def create_user():
    data = request.json
    new_user = User(username=data['username'], email=data['email'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201

if __name__ == '__main__':
    app.run(port=5555,debug=True)
