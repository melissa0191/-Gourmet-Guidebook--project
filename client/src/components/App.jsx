import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar'; 
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';

function App() {
    return (
        <>
            <div>
                <Navbar /> 
                <Header />
                <Routes>
                    <Route path="/Home" element={<RecipeList />} />
                    <Route path="/recipes" element={<RecipeList />} />
                    <Route path="/recipes/new" element={<RecipeForm />} />
                    <Route path="/recipes/edit/:id" element={<RecipeForm />} />
                    <Route path="/recipes/:id" element={<RecipeDetail />} />
                    <Route path="/categories" element={<CategoryList />} />
                    <Route path="/categories/new" element={<CategoryForm />} />
                    <Route path="/categories/edit/:id" element={<CategoryForm />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
