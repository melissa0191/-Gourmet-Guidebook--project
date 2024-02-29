import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CategoryForm() {
  const [name, setName] = useState('');
  const { id } = useParams(); // Get category ID from URL params

  useEffect(() => {
    // Fetch existing category data if editing
    if (id) {
      axios.get(`http://127.0.0.1:5556/categories/${id}`)
        .then(response => {
          setName(response.data.name);
        })
        .catch(error => {
          console.error('Error fetching category for editing:', error);
        });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const categoryData = {
      name
    };

    if (id) {
      // Edit existing category
      axios.patch(`http://127.0.0.1:5556/categories/${id}`, categoryData)
        .then(response => {
          console.log('Category updated:', response.data);
          // Redirect or show success message
        })
        .catch(error => {
          console.error('Error updating category:', error);
        });
    } else {
      // Create new category
      axios.post('http://127.0.0.1:5556/categories', categoryData)
        .then(response => {
          console.log('Category created:', response.data);
          // Redirect or show success message
        })
        .catch(error => {
          console.error('Error creating category:', error);
        });
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Category' : 'Create Category'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        <button type="submit">{id ? 'Update Category' : 'Create Category'}</button>
      </form>
    </div>
  );
}

export default CategoryForm;
