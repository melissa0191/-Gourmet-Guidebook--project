import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/Home" exact component={Home} />
        <Route path="/recipes" exact component={RecipeList} />
        <Route path="/recipes/:id" component={RecipeDetail} />
        <Route path="/recipes/new" component={RecipeForm} />
        <Route path="/categories" exact component={CategoryList} />
        <Route path="/categories/:id" component={CategoryForm} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

