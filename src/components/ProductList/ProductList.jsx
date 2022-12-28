import React, { useContext, useEffect } from 'react';
import { productContext } from '../../ProductContextProvider';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  const { getProducts, products } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='container d-flex flex-column align-items-center'>
      <div className='d-flex flex-wrap justify-content-center'>
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
