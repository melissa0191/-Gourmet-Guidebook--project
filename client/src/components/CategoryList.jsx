import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div>
      <h2>Category List</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/categories/edit/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/categories/new">Create New Category</Link>
    </div>
  );
}

export default CategoryList;
