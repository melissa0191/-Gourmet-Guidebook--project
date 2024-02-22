
# Project Pitch:

## Owner/s: [Melissa Velasquez Greene]
## Phase and Cohort: Flask Phase 5 SE111323
## One sentence app description:Recipe Manager is a web application designed to help users manage their recipes. Users can create, read, update, and delete recipes, as well as categorize them, search for recipes based on ingredients or categories, and rate recipes.

## Domain Model: [Insert domain model image/link here]


## CRUD User Story

As a user, I want to be able to create, read, update, and delete recipes of my planned and actual time, as well as categorize recipes and rate them.

In this repo:

- There is a Flask application with some features built out.
- There is a fully built React frontend application.

You can check your API by:

- Using Postman to make requests

- Running the React application in the browser and interacting with the API via
  the frontend

You can import `project-5-Movie-City.postman_collection.json` into Postman by
pressing the `Import` button.

## Installation Instructions

To download the dependencies for the frontend and backend, run:

```console
pipenv install
pipenv shell
npm install --prefix client
```

You can run your Flask API on [`127.0.0.1:5000`](http://127.0.0.1:5000/) by
running:

```console
python server/app.py
```

running:

```sh
npm start --prefix client
```

## Models

The file `server/models.py` defines the model classes **without relationships**.
Use the following commands to create the initial database `app.db`:

```console
export FLASK_APP=server/app.py
flask db init
flask db upgrade head
```
You can run your Flask API on [`localhost:5555`](http://localhost:5555) by
running:

```console
python server/app.py
```

You can run your React app on [`localhost:4000`](http://localhost:4000) by
running:

```sh
npm start --prefix client
```

### Domain Model

- **Models:**
  - Many-to-many relationship
  - A recipe belongs to one or more categories
  - A category has many recipes
  - A recipe can have ratings
  - A user can rate multiple recipes
  - A recipe has ingredients and instructions
  - A user has many recipes

### Validations

- Add validations to the Recipe model:
  - Must have a title, ingredients, instructions, and category_id
- Add validations to the Category model:
  - Must have a name
- Add validations to the Rating model:
  - Must have a user_id, recipe_id, and rating value
- Add validations to the User model:
  - Must have a username, email, and password


### API Routes

- **Recipe:**
  - GET /recipes/
  - POST /recipes/
  - GET /recipes/<int:id>
  - PATCH /recipes/<int:id>
  - DELETE /recipes/<int:id>
  
- **Category:**
  - GET /categories/
  - POST /categories/
  - GET /categories/<int:id>
  - PATCH /categories/<int:id>
  - DELETE /categories/<int:id>
  
- **Rating:**
  - GET /ratings/
  - POST /ratings/
  - GET /ratings/<int:id>
  - PATCH /ratings/<int:id>
  - DELETE /ratings/<int:id>

- **User:**
  - GET /users/
  - POST /users/
  - GET /users/<int:id>
  - PATCH /users/<int:id>
  - DELETE /users/<int:id>

## Frontend (React)

### Component Hierarchy

- **App Component**
  - Header Component
  - Main Component
    - RecipeList Component
    - RecipeDetail Component
    - RecipeForm Component
    - CategoryList Component
    - CategoryForm Component
    - RatingForm Component
    - UserList Component
    - UserForm Component
  - Footer Component

### Component Details

- **React Routes:**
  - /: Home page displaying a list of recipes
  - /recipes/:id: View details of a specific recipe
  - /recipes/new: Create a new recipe
  - /recipes/edit/:id: Edit an existing recipe
  - /categories/: View all categories
  - /categories/new: Create a new category
  - /categories/edit/:id: Edit an existing category
  - /users/: View all users
  - /users/new: Create a new user
  - /users/edit/:id: Edit an existing user

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or feature implementations, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).



