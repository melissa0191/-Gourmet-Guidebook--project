from app import app
from models import User, Recipe, Category, Rating,db

with app.app_context():
    # Create users
    user1 = User(username='user1', email='user1@example.com' )
    user2 = User(username='user2', email='user2@example.com')
    db.session.add(user1)
    db.session.add(user2)
    db.session.commit()

    # Create categories
    category1 = Category(name='Breakfast')
    category2 = Category(name='Lunch')
    category3 = Category(name='Dinner')
    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.commit()

    # Create recipes
    recipe1 = Recipe(title='Scrambled Eggs', ingredients='eggs, salt, pepper', instructions='Beat eggs, season with salt and pepper, cook in a pan', category_id=1, user_id=1)
    recipe2 = Recipe(title='Chicken Sandwich', ingredients='chicken breast, bread, lettuce, tomato', instructions='Grill chicken, assemble sandwich with lettuce and tomato', category_id=2, user_id=1)
    recipe3 = Recipe(title='Spaghetti Bolognese', ingredients='spaghetti, ground beef, tomato sauce, onion, garlic', instructions='Cook spaghetti, brown beef, sauté onion and garlic, add tomato sauce, serve over spaghetti', category_id=3, user_id=2)
    db.session.add(recipe1)
    db.session.add(recipe2)
    db.session.add(recipe3)
    db.session.commit()

    # Create ratings
    rating1 = Rating(rating_value=4, recipe_id=1, user_id= 1)
    rating2 = Rating(rating_value=5, recipe_id=2, user_id= 2)
    rating3 = Rating(rating_value=3, recipe_id=3, user_id= 3)
    db.session.add(rating1)
    db.session.add(rating2)
    db.session.add(rating3)
    db.session.commit()


   
