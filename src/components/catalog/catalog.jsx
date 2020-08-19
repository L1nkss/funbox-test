import React from 'react';
import './style/style.scss';
import Product from '../product/product';

const Catalog = (props) => {
  const { products } = props;
  return (
    <ul className="catalog">
      {products.map((product) => {
        return <Product key={product.id} data={product} handleCardClick={props.handleCardClick} />;
      })}
    </ul>
  );
};

export default Catalog;
