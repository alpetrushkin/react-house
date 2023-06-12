import React from 'react';
import styles from './CartBlockItem.module.css';
import england from '../../../assets/images/product/england/1.jpg';


const CartBlockItem = ({count}) => {
  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={england} alt="england"/>
        <div className={styles.productImgItem}>
          <span className={styles.productAuthor}>Марсель Руссо</span>
          <h3>Охота Амура</h3>
          <span>Холст, масло (50х80) </span>
        </div>
      </div>

      <div className={styles.count}>
        <div className={styles.countBtn}>
          <div className={styles.outsideCircle}>
            <div className={styles.boxCircle}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15"/>
              </svg>
            </div>
          </div>

          <span>{count}</span>
          <div className={styles.outsideCircle}>
            <div className={styles.boxCircle}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
              </svg>
            </div>
          </div>
        </div>
        <div>14 500 руб</div>
        <a className={styles.remove} href="#">Удалить</a>
      </div>
    </div>
  );
};

export default CartBlockItem;