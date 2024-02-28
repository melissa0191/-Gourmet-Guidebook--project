from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from config import db


class User(db.Model, SerializerMixin):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    recipes = db.relationship('Recipe', backref='user')
    ratings = db.relationship('Rating', back_populates='user')


    serialize_rules = ('-recipes.user',)
  
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
    instructions = db.Column(db.String)
    user_id= db.Column(db.Integer, db.ForeignKey('users.id'))  
      

    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    category = db.relationship('Category', back_populates='recipes')

    ratings = db.relationship('Rating', back_populates='recipe')

    serialize_rules = ('-ratings.recipe',)

    def __repr__(self):
        return f'<Recipe {self.id} : {self.title} : {self.ingredients} :{self.instructions} :{self.category_id} >'




class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    recipes = db.relationship('Recipe', back_populates='category')

    serialize_rules = ('-recipes.category',)

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
    serialize_rules = ('-recipe.ratings',)

    # @validates('rating_value')
    # def validate_value(self, key, value):
    #     if value is None or value < 0:
    #         raise ValueError(f"{key.capitalize()} must have a non-negative value.")
    #     return value

    def __repr__(self):
        return f'<Rating {self.id}:{self.rating_value}:{self.recipe_id}>' 