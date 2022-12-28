import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditContact/EditProduct';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/edit/:id' element={<EditProduct />} />
      </Routes>
    </div>
  );
};

export default App;
