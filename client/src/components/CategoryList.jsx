import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newRecipeName, setNewRecipeName] = useState('');
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

  const handleNewRecipeChange = (event) => {
    setNewRecipeName(event.target.value);
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
          instructions: newRecipeInstructions,
          category_id: newCategory.id
        })
        .then(() => {
          // After successfully creating the category and recipe, fetch categories again
          fetchCategories();
          // Reset form fields
          setNewCategoryName('');
          setNewRecipeName('');
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
    <div>
      <h2>Category List</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
            <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
            {/* Display recipes associated with the category */}
            <ul>
              {category.recipes.map(recipe => (
                <li key={recipe.id}>{recipe.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <form onSubmit={handleNewCategorySubmit}>
        <input
          type="text"
          value={newCategoryName}
          onChange={handleNewCategoryChange}
          placeholder="Enter new category name"
        />
        <input
          type="text"
          value={newRecipeName}
          onChange={handleNewRecipeChange}
          placeholder="Enter new recipe name"
        />
        <textarea
          value={newRecipeInstructions}
          onChange={handleNewRecipeInstructionsChange}
          placeholder="Enter recipe instructions"
        />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
}

export default CategoryList;
