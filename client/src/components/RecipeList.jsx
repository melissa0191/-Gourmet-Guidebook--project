import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [ratedRecipe, setRatedRecipe] = useState(null);
  const [ratingValue, setRatingValue] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5556/recipes')
      .then(response => {
        setRecipes(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = recipes.filter(recipe => {
      return (
        recipe.title && recipe.title.toLowerCase().includes(query) ||
        recipe.ingredients && recipe.ingredients.toLowerCase().includes(query) ||
        recipe.category && recipe.category.toLowerCase().includes(query)
      );
    });
    setFilteredRecipes(filtered);
  };

  const handleDeleteRecipe = (id) => {
    axios.delete(`http://127.0.0.1:5556/recipes/${id}`)
      .then(response => {
        setRecipes(recipes.filter(recipe => recipe.id !== id));
      })
      .catch(error => {
        console.error('Error deleting recipe:', error);
      });
  };

  const handleRateRecipe = (id, rating) => {
    setRatedRecipe(id);
    setRatingValue(rating);
    // For sending rating to the backend, you can include this logic here
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Recipe List</h2>
      <input type="text" placeholder="Search recipes..." onChange={handleSearch} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
        {(searchQuery ? filteredRecipes : recipes).map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            {recipe.image_url && <img src={recipe.image_url} alt={recipe.title} style={{ maxWidth: '400px', maxHeight: '400px' }} />}
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>User ID: {recipe.user_id}</p>
            <p>Category ID: {recipe.category_id}</p>
            <div>
              Rate:
              {[1, 2, 3, 4, 5].map(rating => (
                <button key={rating} onClick={() => handleRateRecipe(recipe.id, rating)}>{rating}</button>
              ))}
            </div>
            {ratedRecipe === recipe.id && (
              <p>You rated "{recipe.title}" with {ratingValue}</p>
            )}
            <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
          </div>
        ))}
      </div>
      <Link to="/recipes/new">Create New Recipe</Link>
    </div>
  );
}

export default RecipeList;




