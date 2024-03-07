from app import app
from models import User, Recipe, Category, Rating,db

with app.app_context():
    # Create users
    user1 = User(username='user1', email='user1@example.com' )
    user2 = User(username='user2', email='user2@example.com')
    db.session.add(user1)
    db.session.add(user2)
    db.session.commit()

    print("User seeded successfully.")

    # Create categories
    category1 = Category(name='Breakfast')
    category2 = Category(name='Lunch')
    category3 = Category(name='Dinner')
    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.commit()
    print("Category seeded successfully.")

    # Create recipes
    recipe1=Recipe(title='Scrambled Eggs', ingredients= 'eggs, salt, pepper', instructions= 'Beat eggs, season with salt and pepper, cook in a pan', image_url= 'https://www.recipegirl.com/wp-content/uploads/2007/06/Creamy-Scrambled-Eggs-1.jpeg', category_id= 1, user_id= 1)
    recipe2=Recipe(title='Grilled Chicken Salad', ingredients= 'chicken breast, lettuce, tomato, cucumber, salad dressing', instructions= 'Grill chicken, chop vegetables, toss with salad dressing', image_url= 'https://www.eatingwell.com/thmb/g_4THo2JjoiRYTYBxW4StoH48qU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Grilled-chicken-salad-1x1-228-a7f2948441384115bbf5c3f8bcddf053.jpg', category_id=2, user_id=1)
    recipe3=Recipe(title='Spaghetti Carbonara', ingredients= 'spaghetti, bacon, eggs, Parmesan cheese, black pepper', instructions= 'Cook spaghetti, fry bacon, mix eggs and cheese, combine with spaghetti and bacon', image_url= 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1558_1_1436795948.jpg?tr=w-800,h-600', category_id= 3, user_id= 2)
    recipe4=Recipe(title='Vegetable Stir Fry', ingredients='bell peppers, broccoli, carrots, snow peas, tofu, soy sauce', instructions= 'Chop vegetables, stir fry with tofu and soy sauce', image_url= 'https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg', category_id=1, user_id=2)
    recipe5=Recipe(title='Beef Tacos', ingredients= 'ground beef, taco seasoning, tortillas, lettuce, tomato, cheese, salsa', instructions= 'Brown beef with taco seasoning, assemble tacos with toppings', image_url='https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-768x575.jpg', category_id= 2, user_id=1)
    recipe6=Recipe(title='Chicken Alfredo', ingredients= 'chicken breast, fettuccine, Alfredo sauce, garlic, Parmesan cheese', instructions= 'Cook chicken, boil pasta, heat Alfredo sauce, combine with cooked chicken and pasta', image_url='https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Creamy-and-Saucy-Chicken-Alfredo-Pasta.jpg', category_id= 3, user_id= 2)
    recipe7=Recipe(title= 'Avocado Toast', ingredients='avocado, bread, salt, pepper, lemon juice, red pepper flakes', instructions= 'Mash avocado, spread on toast, season with salt, pepper, lemon juice, and red pepper flakes', image_url='https://hips.hearstapps.com/hmg-prod/images/avocado-toast-recipe-2-6446eccb127f2.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*', category_id= 1, user_id= 1)
    recipe8=Recipe(title= 'Spinach and Feta Stuffed Chicken', ingredients='chicken breasts, spinach, feta cheese, garlic, olive oil', instructions= 'Make a pocket in chicken breasts, stuff with spinach and feta mixture, bake', image_url='https://thebigmansworld.com/wp-content/uploads/2023/12/stuffed-chicken-breast-recipe.jpg', category_id= 2, user_id= 2)
    recipe9=Recipe(title='Mushroom Risotto', ingredients= 'Arborio rice, mushrooms, onion, garlic, vegetable broth, Parmesan cheese', instructions='Sauté mushrooms, onion, and garlic, add rice and broth, cook until creamy, stir in cheese', image_url='https://images.themodernproper.com/billowy-turkey/production/posts/2019/Wild-Mushroom-Risotto-25.jpg?w=1200&h=1800&q=82&fm=jpg&fit=crop&dm=1599768474&s=00e8ad63a66be48369398e1a1c4e4be8', category_id=3,user_id=1)
    recipe10=Recipe(title='Caprese Salad', ingredients= 'tomatoes, fresh mozzarella cheese, basil leaves, balsamic glaze', instructions= 'Slice tomatoes and cheese, layer with basil leaves, drizzle with balsamic glaze', image_url= 'https://images.getrecipekit.com/20211008163605-peach_caprese_salad_new_webv4.jpg?aspect_ratio=4:3&quality=90&', category_id= 1, user_id=2)
        # Add more recipes with image URLs, ingredients, and instructions here

    db.session.add(recipe1)
    db.session.add(recipe2)
    db.session.add(recipe3)
    db.session.add(recipe4)
    db.session.add(recipe5)
    db.session.add(recipe6)
    db.session.add(recipe7)
    db.session.add(recipe8)
    db.session.add(recipe9)
    db.session.add(recipe10)
 
    db.session.commit()
    print("Recipe seeded successfully.")

    # Create ratings
    rating1 = Rating(rating_value=4, recipe_id=1, user_id= 1)
    rating2 = Rating(rating_value=5, recipe_id=2, user_id= 2)
    rating3 = Rating(rating_value=3, recipe_id=3, user_id= 3)
    db.session.add(rating1)
    db.session.add(rating2)
    db.session.add(rating3)
    db.session.commit()

    print("Rating seeded successfully.")


   
