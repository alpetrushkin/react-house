import React from 'react';
import './buttonCart.css';

const ButtonCart = ({title}) => {
  return (
    <button className="btn-reset button button__product">{title}
    </button>
  );
};

export default ButtonCart;