import React from 'react';
import './CartBtn.css';

const CartBtn = () => {
  return (
    <>
      <a className="cart-link" href="#">
      <div className="cart">
        <svg className="feather feather-shopping-cart" fill="none" height="24" stroke="currentColor"
             strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
             xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <div className="circle">
          <span>1</span>
        </div>
      </div>
    </a>
    </>
  );
};

export default CartBtn;