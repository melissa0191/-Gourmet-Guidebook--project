
#Project Pitch:

#Owner/s: [Melissa Velasquez Greene]
#Phase and Cohort: Phase 4
#One sentence app description: Movie Management App for tracking and organizing your favorite films.

Domain Model: [Insert domain model image/link here]

```MVP:

Implement CRUD functionality.
Define models for movies, genres, directors, and actors with appropriate relationships.
Validations for required fields in models.
RESTful API routes for accessing and manipulating movie data.
Serialize data for API responses.
```
Backend (API):
MODELS

Movie:
Title
Release Year
Genre (Many-to-Many Relationship)
Director
Actors (Many-to-Many Relationship)
Genre:
Name
Director:
Name
Actor:
Name
Order:
Belongs to a Customer and belongs to a Coffee
Validations:
Movie model:
Title must be present
Release Year must be valid
Genre model:
Name must be present
Director model:
Name must be present
Actor model:
Name must be present
CONTROLLERS
```
API routes following RESTful conventions:
GET /movies/
POST /movies/
GET /movies/int:id
PATCH /movies/int:id
DELETE /movies/int:id
GET /genres/
POST /genres/
GET /genres/int:id
PATCH /genres/int:id
DELETE /genres/int:id
GET /directors/
POST /directors/
GET /directors/int:id
PATCH /directors/int:id
DELETE /directors/int:id
GET /actors/
POST /actors/
GET /actors/int:id
PATCH /actors/int:id
DELETE /actors/int:id
FRONTEND (REACT)
``

Components for making requests to API:
MovieForm
GenreForm
DirectorForm
ActorForm
Routes:
/movies (GET, POST)
/movies/:id (GET, PATCH, DELETE)
/genres (GET, POST)
/genres/:id (GET, PATCH, DELETE)
/directors (GET, POST)
/directors/:id (GET, PATCH, DELETE)
/actors (GET, POST)
/actors/:id (GET, PATCH, DELETE)
EXTRA! Stretch goals:

Implement authentication and authorization for user accounts.
Add search and filter functionality for movies.
Include ratings and reviews for movies.
Implement user profiles to save favorite movies and personalized recommendations.
