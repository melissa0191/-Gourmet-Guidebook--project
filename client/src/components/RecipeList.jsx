import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleDeleteRecipe = (id) => {
    axios.delete(`http://127.0.0.1:5556/recipes/${id}`)
      .then(response => {
        setRecipes(recipes.filter(recipe => recipe.id !== id));
      })
      .catch(error => {
        console.error('Error deleting recipe:', error);
      });
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
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipes.map(recipe => (
          <div key={recipe.id} style={{ width: '30%', padding: '10px' }}> {/* Set width to 50% for two columns */}
            <h3>{recipe.title}</h3>
            {recipe.image_url && <img src={recipe.image_url} alt={recipe.title} style={{ maxWidth: '100%', height: 'auto' }} />} {/* Apply styles for image */}
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>User ID: {recipe.user_id}</p>
            <p>Category ID: {recipe.category_id}</p>
            <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
          </div>
        ))}
      </div>
      <Link to="/recipes/new">Create New Recipe</Link>
    </div>
  );
}

export default RecipeList;


