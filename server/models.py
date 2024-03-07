from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from config import db


class User(db.Model, SerializerMixin):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    recipes = db.relationship('Recipe', back_populates='user')
    ratings = db.relationship('Rating', back_populates='user')

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'recipes': [recipe.to_dict() for recipe in self.recipes],
            'ratings': [rating.to_dict() for rating in self.ratings]
        }
   
  
    # @validates('username', 'email', 'password')
    # def validate_user(self, key, value):
    #     if not value or value is None:
    #         raise ValueError('Username, email, and password must exist!')
    #     return value

    def __repr__(self):
        return f'<User {self.id}: {self.username}: {self.email}>'

class Recipe(db.Model, SerializerMixin):
    __tablename__ = "recipes"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    ingredients = db.Column(db.String)
    image_url = db.Column(db.String(255))  # Fixed typo here
    instructions = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

    user = db.relationship('User', back_populates='recipes')
    category = db.relationship('Category', back_populates='recipes')
    ratings = db.relationship('Rating', back_populates='recipe')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'ingredients': self.ingredients,
            'image_url': self.image_url,  # Changed 'image_url' here
            'instructions': self.instructions,
            'user_id': self.user_id,
            'category_id': self.category_id,
            'ratings': [rating.to_dict() for rating in self.ratings]
        }

    def __repr__(self):
        return f'<Recipe {self.id} : {self.title} : {self.ingredients} : {self.instructions} : {self.category_id}>'





class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    recipes = db.relationship('Recipe', back_populates='category')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'recipes': [recipe.to_dict() for recipe in self.recipes]
        }

    def __repr__(self):
        return f'<Category {self.id}:{self.name}>'

class Rating(db.Model, SerializerMixin):
    __tablename__ = 'ratings'
    id = db.Column(db.Integer, primary_key=True)
    rating_value = db.Column(db.Integer)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'), nullable=False)
    recipe = db.relationship('Recipe', back_populates='ratings') 
    user_id= db.Column(db.Integer, db.ForeignKey('users.id'))   
    user= db.relationship('User', back_populates='ratings') 
    
    def to_dict(self):
        return {
            'id': self.id,
            'rating_value': self.rating_value,
            'recipe_id': self.recipe_id,
            'user_id': self.user_id
        }

    # @validates('rating_value')
    # def validate_value(self, key, value):
    #     if value is None or value < 0:
    #         raise ValueError(f"{key.capitalize()} must have a non-negative value.")
    #     return value

    def __repr__(self):
        return f'<Rating {self.id}:{self.rating_value}:{self.recipe_id}>' 