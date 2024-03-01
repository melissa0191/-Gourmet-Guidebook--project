import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CategoryForm() {
  const [categoryName, setCategoryName] = useState('');
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newRecipeIngredients, setNewRecipeIngredients] = useState('');
  const [newRecipeInstructions, setNewRecipeInstructions] = useState('');
  const { id } = useParams(); // Get category ID from URL params

  useEffect(() => {
    // Fetch existing category data if editing
    if (id) {
      axios.get(`http://127.0.0.1:5556/categories/${id}`)
        .then(response => {
          setCategoryName(response.data.name);
        })
        .catch(error => {
          console.error('Error fetching category for editing:', error);
        });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const categoryData = {
      name: categoryName
    };

    const recipeData = {
      title: newRecipeName,
      ingredients: newRecipeIngredients,
      instructions: newRecipeInstructions,
      category_id: id
    };

    axios.post('http://127.0.0.1:5556/categories', categoryData)
      .then(response => {
        const newCategory = response.data;
        // Create the recipe associated with the new category
        axios.post('http://127.0.0.1:5556/recipes', recipeData)
          .then(() => {
            // Redirect or show success message
          })
          .catch(error => {
            console.error('Error creating new recipe:', error);
          });
      })
      .catch(error => {
        console.error('Error creating new category:', error);
      });
  };

  return (
    <div className="category-form-container">
      <h2>{id ? 'Edit Category' : 'Create Category'}</h2>
      <form onSubmit={handleSubmit} className="category-form">
        <label htmlFor="categoryName">Category Name:</label>
        <input
          type="text"
          id="categoryName"
          value={categoryName}
          onChange={e => setCategoryName(e.target.value)}
          required
          className="category-input"
        />
        <label htmlFor="newRecipeName">New Recipe Name:</label>
        <input
          type="text"
          id="newRecipeName"
          value={newRecipeName}
          onChange={e => setNewRecipeName(e.target.value)}
          required
          className="recipe-input"
        />
        <label htmlFor="newRecipeIngredients">Ingredients:</label>
        <input
          type="text"
          id="newRecipeIngredients"
          value={newRecipeIngredients}
          onChange={e => setNewRecipeIngredients(e.target.value)}
          required
          className="recipe-input"
        />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea
          id="newRecipeInstructions"
          value={newRecipeInstructions}
          onChange={e => setNewRecipeInstructions(e.target.value)}
          required
          className="recipe-instructions"
        />
        <button type="submit" className="submit-btn">{id ? 'Update Category' : 'Create Category'}</button>
      </form>
    </div>
  );
}

export default CategoryForm;








