import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newRecipeIngredients, setNewRecipeIngredients] = useState('');
  const [newRecipeInstructions, setNewRecipeInstructions] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios.get('http://127.0.0.1:5556/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  };

  const handleNewCategoryChange = (event) => {
    setNewCategoryName(event.target.value);
  };

  const handleNewRecipeNameChange = (event) => {
    setNewRecipeName(event.target.value);
  };

  const handleNewRecipeIngredientsChange = (event) => {
    setNewRecipeIngredients(event.target.value);
  };

  const handleNewRecipeInstructionsChange = (event) => {
    setNewRecipeInstructions(event.target.value);
  };

  const handleNewCategorySubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:5556/categories', { name: newCategoryName })
      .then(response => {
        const newCategory = response.data;
        // Create the recipe associated with the new category
        axios.post('http://127.0.0.1:5556/recipes', {
          title: newRecipeName,
          ingredients: newRecipeIngredients,
          instructions: newRecipeInstructions,
          category_id: newCategory.id
        })
        .then(() => {
          // After successfully creating the category and recipe, fetch categories again
          fetchCategories();
          // Reset form fields
          setNewCategoryName('');
          setNewRecipeName('');
          setNewRecipeIngredients('');
          setNewRecipeInstructions('');
        })
        .catch(error => {
          console.error('Error creating new recipe:', error);
        });
      })
      .catch(error => {
        console.error('Error creating new category:', error);
      });
  };

  const handleDeleteCategory = (categoryId) => {
    axios.delete(`http://127.0.0.1:5556/categories/${categoryId}`)
      .then(() => {
        // After successfully deleting the category, fetch categories again
        fetchCategories();
      })
      .catch(error => {
        console.error('Error deleting category:', error);
      });
  };

  return (
    <div className="category-list-container">
      <h2>Category List</h2>
      {categories.map(category => (
        <div key={category.id} className="category-item">
          <h3>{category.name}</h3>
          <button onClick={() => handleDeleteCategory(category.id)}>Delete Category</button>
          {/* Display recipes associated with the category */}
          <ul className="recipe-list">
            {category.recipes.map(recipe => (
              <li key={recipe.id} className="recipe-item">
                <h4>{recipe.title}</h4>
                <p>Ingredients: {recipe.ingredients}</p>
                <p>Instructions: {recipe.instructions}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <form onSubmit={handleNewCategorySubmit} className="new-category-form">
        <input
          type="text"
          value={newCategoryName}
          onChange={handleNewCategoryChange}
          placeholder="Enter new category name"
          className="category-input"
        />
        <input
          type="text"
          value={newRecipeName}
          onChange={handleNewRecipeNameChange}
          placeholder="Enter new recipe name"
          className="recipe-input"
        />
        <input
          type="text"
          value={newRecipeIngredients}
          onChange={handleNewRecipeIngredientsChange}
          placeholder="Enter recipe ingredients"
          className="recipe-input"
        />
        <textarea
          value={newRecipeInstructions}
          onChange={handleNewRecipeInstructionsChange}
          placeholder="Enter recipe instructions"
          className="recipe-instructions"
        />
        <button type="submit" className="add-category-btn">Add Category</button>
      </form>
    </div>
  );
}

export default CategoryList;



