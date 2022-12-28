import axios from 'axios';
import React, { createContext, useState } from 'react';

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const API = 'http://localhost:8000/products';

  const [products, setProducts] = useState([]);
  const [oneProductInfo, setOneProductInfo] = useState(null);

  //! add

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  //! get contacts

  async function getProducts() {
    let { data } = await axios.get(API);
    setProducts(data);
  }

  //! delete contact

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  //! get one contact info

  async function getOneProductInfo(id) {
    let { data } = await axios.get(`${API}/${id}`);
    setOneProductInfo(data);
  }
  // ! update

  async function updateProductInfo(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }

  const values = {
    addProduct,
    getProducts,
    products,
    deleteProduct,
    getOneProductInfo,
    oneProductInfo,
    updateProductInfo,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
