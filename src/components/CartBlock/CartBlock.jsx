import React from 'react';
import {Link} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import styles from './CartBlock.module.css';

import arrowTop from '../../assets/images/arrowTop.png';
import arrowDown from '../../assets/images/arrowDown.png';
import CartBlockItem from "./CartBlockItem/CartBlockItem";

const CartBlock = () => {
  return (
    <div className={styles.root}>
      {/*<div className={styles.wrapper}>*/}
      {/*  <Header/>*/}
      {/*  <Hero/>*/}
      {/*  <Footer/>*/}
      {/*</div>*/}
      <div className={styles.opacity}></div>
      <div className={styles.cartWrapper}>
        <div className={styles.element}>
          <div className={styles.close}>
            <Link to="/">
              <svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs></defs><path className="cls-1" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm4.707,14.293a1,1,0,1,1-1.414,1.414L12,13.414,8.707,16.707a1,1,0,1,1-1.414-1.414L10.586,12,7.293,8.707A1,1,0,1,1,8.707,7.293L12,10.586l3.293-3.293a1,1,0,1,1,1.414,1.414L13.414,12Z"/></svg>
            </Link>
          </div>
          <div className={styles.drawerTop}>
            <h3>Оформление заказа</h3>
            <div className={styles.clear}>
              <svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <path
                  className="cls-1"
                  d="M13,0H11A3,3,0,0,0,8,3V4H2A1,1,0,0,0,2,6H3V20a4,4,0,0,0,4,4H17a4,4,0,0,0,4-4V6h1a1,1,0,0,0,0-2H16V3A3,3,0,0,0,13,0ZM10,3a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V4H10Zm9,17a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6H19Z"/>
                <path
                  className="cls-1" d="M12,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Z"/>
                <path className="cls-1"
                      d="M15,18a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z"/>
                <path
                  className="cls-1" d="M8,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,8,9Z"/>
              </svg>
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.productPrice}>
              <span>Товаров в заказе:</span><b>3 шт</b>
            </div>
            <div className={styles.productPrice}>
              <span>Общая сумма заказа:</span><b>25 789 руб</b>
            </div>
            <b className={styles.rank}>Состав заказа <img src={arrowTop} alt="arrow"/></b>
            <CartBlockItem count={2}/>
            <CartBlockItem count={100} />
          </div>

          <form className={styles.form} action="#">
            <input type="text" name="firstname" placeholder="Ваше имя"/>
            <input type="tel" name="telephone" placeholder="Номер телефона"/>
            <input type="email" name="mail" placeholder="E-mail"/>
            <div>
              <button className={styles.submit} type="submit">Оформить заказ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartBlock;