import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { productContext } from '../../ProductContextProvider';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [price, setPrice] = useState('');

const {addProduct} = useContext(productContext)  

  const handleValues = () => {
    if (!title || !descr || !price) {
      alert('заполните поля');
      return;
    }

    let newProduct = {
      title,
      descr,
      price,
    };

    addProduct(newProduct);
  };

  return (
    <div className='container d-flex flex-column mt-5 align-items-center'>
      <h1>ADD CONTACT</h1>
      <Form.Control
        onChange={(e) => setTitle(e.target.value)}
        className='mb-2 w-50'
        placeholder='title'
      />
      <Form.Control
        onChange={(e) => setDescr(e.target.value)}
        className='mb-2 w-50'
        placeholder='descr'
      />
      <Form.Control
        onChange={(e) => setPrice(e.target.value)}
        className='mb-2 w-50'
        placeholder='price'
        type='number'
      />
      <Button onClick={handleValues} className='w-50' variant='dark'>
        add PRODUCT
      </Button>
    </div>
  );
};

export default AddProduct;
