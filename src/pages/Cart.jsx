import React from 'react';
import {Link} from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Корзина</h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
};

export default Cart;