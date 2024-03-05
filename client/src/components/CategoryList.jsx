import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ id: '', name: '' });
  const history = useHistory();

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

  const handleCreateCategory = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:5556/categories', newCategory)
      .then(() => {
        fetchCategories(); // Refresh category list
        setNewCategory({ id: '', name: '' }); // Clear form fields
      })
      .catch(error => {
        console.error('Error creating category:', error);
      });
  };

  const handleDeleteCategory = (categoryId) => {
    axios.delete(`http://127.0.0.1:5556/categories/${categoryId}`)
      .then(() => {
        // Remove the deleted category from the state
        setCategories(categories.filter(category => category.id !== categoryId));
      })
      .catch(error => {
        console.error('Error deleting category:', error);
      });
  };

  return (
    <div className="category-list-container">
      <h2>Category List</h2>
      <div>
        <h3>Create New Category</h3>
        <form onSubmit={handleCreateCategory}>
          <label htmlFor="categoryId">Category ID:</label>
          <input
            type="text"
            id="categoryId"
            value={newCategory.id}
            onChange={e => setNewCategory({ ...newCategory, id: e.target.value })}
            placeholder="Enter category ID"
            required
          />
          <label htmlFor="categoryName">Category Name:</label>
          <input
            type="text"
            id="categoryName"
            value={newCategory.name}
            onChange={e => setNewCategory({ ...newCategory, name: e.target.value })}
            placeholder="Enter category name"
            required
          />
          <button type="submit">Create Category</button>
        </form>
      </div>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <h3>{category.name}</h3>
            <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;



