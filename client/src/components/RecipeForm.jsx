import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function RecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [user_id, setUser_id] = useState('');
  const [category_id, setCategory_id] = useState('');
  const [image_url, setImageUrl] = useState(''); // State for image URL
  const { id } = useParams(); // Get recipe ID from URL params

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipeData = {
      title,
      ingredients,
      instructions,
      user_id,
      category_id,
      image_url // Include image URL in the recipe data
    };

    if (id) {
      // Edit existing recipe
      axios.patch(`http://127.0.0.1:5556/recipes/${id}`, recipeData)
        .then(response => {
          console.log('Recipe updated:', response.data);
          // Redirect or show success message
        })
        .catch(error => {
          console.error('Error updating recipe:', error);
        });
    } else {
      // Create new recipe
      axios.post('http://127.0.0.1:5556/recipes', recipeData)
        .then(response => {
          console.log('Recipe created:', response.data);
          // Redirect or show success message
        })
        .catch(error => {
          console.error('Error creating recipe:', error);
        });
    }
  };

  return (
    <div>
      <div>
        <h2>{id ? 'Edit Recipe' : 'Create Recipe'}</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="Title" type="text" value={title} onChange={e => setTitle(e.target.value)} required />
          <textarea placeholder="Ingredients" value={ingredients} onChange={e => setIngredients(e.target.value)} required />
          <textarea placeholder="Instructions" value={instructions} onChange={e => setInstructions(e.target.value)} required />
          <input placeholder="Image URL" type="text" value={image_url} onChange={e => setImageUrl(e.target.value)} required /> {/* Image URL field */}
          <textarea placeholder="Category_id" value={category_id} onChange={e => setCategory_id(e.target.value)} required />
          <textarea placeholder="User_id" value={user_id} onChange={e => setUser_id(e.target.value)} required />
          <button type="submit">{id ? 'Update Recipe' : 'Create Recipe'}</button>
        </form>
      </div>
    </div>
  );
}

export default RecipeForm;


