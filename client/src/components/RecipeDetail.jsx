import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const [newRecipeTitle, setNewRecipeTitle] = useState('');
  const [newRecipeIngredients, setNewRecipeIngredients] = useState('');
  const [newRecipeInstructions, setNewRecipeInstructions] = useState('');
  const { id } = useParams();
  const history = useHistory();
  console.log(newRecipeIngredients,newRecipeTitle)

  const handleCreateRecipe = (e) => {
    e.preventDefault();

    const recipeData = {
      title: newRecipeTitle,
      ingredients: newRecipeIngredients,
      instructions: newRecipeInstructions,
    };
    console.log(recipeData);
    axios.post('http://127.0.0.1:5556/recipes', recipeData)
      .then(response => {
        setRecipe(response.data);
        setNewRecipeTitle('');
        setNewRecipeIngredients('');
        setNewRecipeInstructions('');
      })
      .catch(error => {
        console.error('Error creating recipe:', error);
      });
  };

  const handleDeleteRecipe = () => {
    axios.delete(`http://127.0.0.1:5556/recipes/${id}`)
      .then(() => {
        history.push('/recipes');
      })
      .catch(error => {
        console.error('Error deleting recipe:', error);
      });
  };

  useEffect(() => {
    axios.get(`http://127.0.0.1:5556/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipe:', error);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      {recipe.image_url && <img src={recipe.image_url} alt={recipe.title} />}
      <p>User ID: {recipe.user_id}</p>
      <p>Category ID: {recipe.category_id}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
      <div>
        <h3>Create New Recipe</h3>
        <form onSubmit={handleCreateRecipe}>
          <label>Title:</label>
          <input type="text" value={newRecipeTitle} onChange={e => setNewRecipeTitle(e.target.value)} required />
          <label>Ingredients:</label>
          <textarea value={newRecipeIngredients} onChange={e => setNewRecipeIngredients(e.target.value)} required />
          <label>Instructions:</label>
          <textarea value={newRecipeInstructions} onChange={e => setNewRecipeInstructions(e.target.value)} required />
          <button type="submit">Create Recipe</button>
        </form>
        <button onClick={handleDeleteRecipe}>Delete Recipe</button>
      </div>
    </div>
  );
}

export default RecipeDetail;




