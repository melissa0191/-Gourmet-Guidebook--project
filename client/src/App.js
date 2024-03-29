import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  // Example of fetching recipes and categories on component mount
  useEffect(() => {
    fetchRecipes();
    fetchCategories();
  }, []);

  // Example of fetching recipes
  const fetchRecipes = () => {
    // Your API call to fetch recipes would go here
    // For now, just setting some dummy data
    const dummyRecipes = [
      { id: 1, title: 'Pasta Carbonara', ingredients: 'Spaghetti, eggs, bacon, parmesan cheese, black pepper' },
      { id: 2, title: 'Chicken Curry', ingredients: 'Chicken, curry paste, coconut milk, vegetables, rice' }
    ];
    setRecipes(dummyRecipes);
  };

  // Example of fetching categories
  const fetchCategories = () => {
    // Your API call to fetch categories would go here
    // For now, just setting some dummy data
    const dummyCategories = [
      { id: 1, name: 'Italian' },
      { id: 2, name: 'Asian' },
      { id: 3, name: 'Mexican' }
    ];
    setCategories(dummyCategories);
  };

  return (
    <Router> {/* Wrap your routes with the BrowserRouter component */}
      <div>
        <Header />
        <Switch>
          <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />
          <Route path="/recipes/new" element={<RecipeForm categories={categories} />} />
          <Route path="/categories" element={<CategoryList categories={categories} />} />
          <Route path="/categories/new" element={<CategoryForm />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
