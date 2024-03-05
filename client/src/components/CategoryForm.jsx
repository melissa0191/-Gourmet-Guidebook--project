import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CategoryForm() {
  const { id } = useParams(); // Get category ID from URL params
  const [category, setCategory] = useState({ id: '', name: '' });

  useEffect(() => {
    // Fetch category data if an ID is provided
    if (id) {
      fetchCategory();
    }
  }, [id]);

  const fetchCategory = () => {
    axios.get(`http://127.0.0.1:5556/categories/${id}`)
      .then(response => {
        setCategory(response.data);
      })
      .catch(error => {
        console.error('Error fetching category:', error);
      });
  };

  const handleUpdateCategory = () => {
    axios.put(`http://127.0.0.1:5556/categories/${id}`, category) // Send the entire category object
      .then(() => {
        // Handle success or navigate to another page
        console.log('Category updated successfully');
      })
      .catch(error => {
        console.error('Error updating category:', error);
      });
  };

  return (
    <div>
      <h2>Edit Category</h2>
      <label htmlFor="categoryId">Category ID:</label>
      <input
        type="text"
        id="categoryId"
        value={category.id}
        readOnly
      />
      <label htmlFor="updatedCategoryName">Updated Category Name:</label>
      <input
        type="text"
        id="updatedCategoryName"
        value={category.name}
        onChange={e => setCategory({ ...category, name: e.target.value })} // Update the 'name' property of the 'category' object
        placeholder="Enter updated category name"
        required
      />
      <button onClick={handleUpdateCategory}>Update Category</button>
    </div>
  );
}

export default CategoryForm;

















