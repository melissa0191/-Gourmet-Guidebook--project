from flask import jsonify, request
from models import Recipe, Rating, Category, User
from config import app, db
from flask import request, make_response
from werkzeug.exceptions import NotFound
from flask_restful import Api, Resource
from models import db, Recipe, Category, Rating, User





api = Api(app)


@app.errorhandler(NotFound)
def route_not_found(e):
    response = make_response("That route does not exist!", 404)
    return response

@app.route('/')
def home():
    return "home"

class Recipes(Resource):
    def get(self):
        recipes = [recipe.to_dict() for recipe in Recipe.query.all()]
        return make_response(recipes, 200)
    
    def post(self):
        data = request.get_json()
        try:
            new_recipe = Recipe(
                title=data['title'],
                ingredients=data['ingredients'],
                instructions=data['instructions'],
                user_id=data['user_id'],
                category_id=data['category_id']
            )
            db.session.add(new_recipe)
            db.session.commit()
            return make_response(new_recipe.to_dict(), 201)

        except ValueError:
            return make_response({'error': 'validation error'})

class RecipesById(Resource):
    def get(self, id):
        recipe = Recipe.query.get(id)
        if recipe:
            return make_response(recipe.to_dict(), 200)
        else:
            return make_response({'Error': 'No recipe found'}, 404)

    def patch(self, id):
        recipe = Recipe.query.get(id)
        if recipe:
            data = request.get_json()
            for attr in data:
                setattr(recipe, attr, data[attr])
            db.session.commit()
            return make_response(recipe.to_dict(), 202)
        else:
            return make_response({'error': 'no recipe found'}, 404)

    def delete(self, id):
        recipe = Recipe.query.get(id)
        if recipe:
            db.session.delete(recipe)
            db.session.commit()
            return make_response({}, 204)
        return make_response({'error': 'no recipe found'}, 404)

class Categories(Resource):
    def get(self):
        categories = [category.to_dict() for category in Category.query.all()]
        return make_response(categories, 200)

    def post(self):
        data = request.get_json()
        try:
            new_category = Category(
                name=data['name']
            )
            db.session.add(new_category)
            db.session.commit()
            return make_response(new_category.to_dict(), 201)

        except ValueError:
            return make_response({'error': 'validation error'})

class CategoriesById(Resource):
    def get(self, id):
        category = Category.query.get(id)
        if category:
            return make_response(category.to_dict(), 200)
        else:
            return make_response({'Error': 'No category found'}, 404)

    def patch(self, id):
        category = Category.query.get(id)
        if category:
            data = request.get_json()
            for attr in data:
                setattr(category, attr, data[attr])
            db.session.commit()
            return make_response(category.to_dict(), 202)
        else:
            return make_response({'error': 'no category found'}, 404)

    def delete(self, id):
        category = Category.query.get(id)
        if category:
            db.session.delete(category)
            db.session.commit()
            return make_response({}, 204)
        return make_response({'error': 'no category found'}, 404)

class Ratings(Resource):
    def get(self):
        ratings = [rating.to_dict() for rating in Rating.query.all()]
        return make_response(ratings, 200)

    def post(self):
        data = request.get_json()
        try:
            new_rating = Rating(
                rating_value=data['rating_value'],
                recipe_id=data['recipe_id'],
                user_id=data['user_id']
            )
            db.session.add(new_rating)
            db.session.commit()
            return make_response(new_rating.to_dict(), 201)

        except ValueError:
            return make_response({'error': 'validation error'})

class RatingsById(Resource):
    def get(self, id):
        rating = Rating.query.get(id)
        if rating:
            return make_response(rating.to_dict(), 200)
        else:
            return make_response({'Error': 'No rating found'}, 404)

    def patch(self, id):
        rating = Rating.query.get(id)
        if rating:
            data = request.get_json()
            for attr in data:
                setattr(rating, attr, data[attr])
            db.session.commit()
            return make_response(rating.to_dict(), 202)
        else:
            return make_response({'error': 'no rating found'}, 404)

    def delete(self, id):
        rating = Rating.query.get(id)
        if rating:
            db.session.delete(rating)
            db.session.commit()
            return make_response({}, 204)
        return make_response({'error': 'no rating found'}, 404)

class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(users, 200)

    def post(self):
        data = request.get_json()
        try:
            new_user = User(
                username=data['username'],
                email=data['email']
            )
            db.session.add(new_user)
            db.session.commit()
            return make_response(new_user.to_dict(), 201)

        except ValueError:
            return make_response({'error': 'validation error'})

class UsersById(Resource):
    def get(self, id):
        user = User.query.get(id)
        if user:
            return make_response(user.to_dict(), 200)
        else:
            return make_response({'Error': 'No user found'}, 404)

    def patch(self, id):
        user = User.query.get(id)
        if user:
            data = request.get_json()
            for attr in data:
                setattr(user, attr, data[attr])
            db.session.commit()
            return make_response(user.to_dict(), 202)
        else:
            return make_response({'error': 'no user found'}, 404)

    def delete(self, id):
        user = User.query.get(id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return make_response({}, 204)
        return make_response({'error': 'no user found'}, 404)

api.add_resource(Recipes, '/recipes')
api.add_resource(RecipesById, '/recipes/<int:id>')
api.add_resource(Categories, '/categories')
api.add_resource(CategoriesById, '/categories/<int:id>')
api.add_resource(Ratings, '/ratings')
api.add_resource(RatingsById, '/ratings/<int:id>')
api.add_resource(Users, '/users')
api.add_resource(UsersById, '/users/<int:id>')

if __name__ == '__main__':
    app.run(port=5556, debug=True) 
