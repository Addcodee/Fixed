import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { productContext } from '../../ProductContextProvider';

const EditProduct = () => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate();
  const { oneProductInfo, getOneProductInfo, updateProductInfo } =
    useContext(productContext);

  const id = useParams;

  useEffect(() => {
    getOneContactInfo(id);
  }, []);

  useEffect(() => {
    if (oneContactInfo) {
      setName(oneContactInfo.name);
      setLastName(oneContactInfo.lastName);
      setPhone(oneContactInfo.phone);
    }
  }, [oneContactInfo]);

  const handleValues = () => {
    const editedProduct = {
      title,
      descr,
      price,
    };

    if (!title.trim() || !descr.trim() || !price.trim()) {
      alert('заполните поля');
      return;
    }
    updateProductInfo(id, editedProduct);
  };

  return (
    <div className='container d-flex flex-column mt-5 align-items-center'>
      <h1>EDIT PRODUCT</h1>
      <Form.Control
        onChange={(e) => setName(e.target.value)}
        className='mb-2 w-50'
        placeholder='name'
        value={name}
      />
      <Form.Control
        onChange={(e) => setLastName(e.target.value)}
        className='mb-2 w-50'
        placeholder='lastName'
        value={lastName}
      />
      <Form.Control
        onChange={(e) => setPhone(e.target.value)}
        className='mb-2 w-50'
        placeholder='phone'
        type='number'
        value={phone}
      />
      <Button
        onClick={() => {
          handleValues;
          navigate('/');
        }}
        className='w-50'
        variant='dark'
      >
        save changes
      </Button>
    </div>
  );
};

export default EditProduct;
