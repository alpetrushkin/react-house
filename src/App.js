import React from 'react';
import logo from './assets/images/logo.svg';
import layer from './assets/images/Layer.png';
import product1 from './assets/images/product/product-1.jpg';
import background from './assets/images/pic_background.png';
import star from './assets/images/star.svg';
import frame from './assets/images/frame.png';
import hand from './assets/images/hand.png';

import avatar1 from './assets/images/avatar1.png';
import avatar2 from './assets/images/avatar2.png';
import avatar3 from './assets/images/avatar3.png';

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="container container-header">
          <div className="header-left">
            <img className="logo" src={logo} alt="logo"/>
            <span className="logo-name">Ink. House</span>
          </div>

          <nav className="header-right">
            <ul className="header-menu">
              <li className="header-menu-item">
                <a className="header-menu-link" href="#">Репродукции</a>
              </li>
              <li className="header-menu-item">
                <a className="header-menu-link" href="#">Новинки</a>
              </li>
              <li className="header-menu-item">
                <a className="header-menu-link" href="#">О нас</a>
              </li>
            </ul>
            <a className="cart-link" href="#">
              <svg className="feather feather-shopping-cart" fill="none" height="24" stroke="currentColor"
                   strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                   xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </a>
          </nav>
        </div>

      </div>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-body">
              <div className="hero-left">
                <img src={layer} alt="layer"/>
              </div>
              <div className="hero-right">
                <h1 className="hero-title">Реплики картин от <span>Ink. House</span></h1>
                <p className="hero-subtitle">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие
                  произведения, доступные цены.</p>
                <button className="button">Продукция</button>
              </div>
            </div>
          </div>
        </section>
        <section className="catalog">
          <div className="container">
            <div className="catalog-top">
              <h2 className="catalog-name">Репродукция</h2>
              <ul className="catalog-tabs">
                <li className="catalog-tabs__item">
                  <button className="btn-reset catalog-tabs__btn">Франция</button>
                </li>
                <li className="catalog-tabs__item">
                  <button className="btn-reset catalog-tabs__btn">Германия</button>
                </li>
                <li className="catalog-tabs__item">
                  <button className="btn-reset catalog-tabs__btn catalog-tabs__btn--active">Англия</button>
                </li>
              </ul>
            </div>

            <div className="catalog-bottom">
              <ul className="catalog-list">
                <li className="catalog__item">
                  <article className="product">
                    <picture>
                      <img src={product1} alt="product"/>
                    </picture>
                    <div className="product__content">
                      <span className="product__author">Марсель Руссо</span>
                      <h3 className="product__title">Охота Амура</h3>
                      <span className="product__props">Холст, масло (50х80) </span>
                      <div className="product__price">14 500 руб</div>
                      <button className="btn-reset button button__product">В корзину</button>
                    </div>
                  </article>
                </li>
                <li className="catalog__item">
                  <article className="product">
                    <picture>
                      <img src={product1} alt="product"/>
                    </picture>
                    <div className="product__content">
                      <span className="product__author">Марсель Руссо</span>
                      <h3 className="product__title">Охота Амура</h3>
                      <span className="product__props">Холст, масло (50х80) </span>
                      <div className="product__price">14 500 руб</div>
                      <button className="btn-reset button button__product">В корзину</button>
                    </div>
                  </article>
                </li>
                <li className="catalog__item">
                  <article className="product">
                    <picture>
                      <img src={product1} alt="product"/>
                    </picture>
                    <div className="product__content">
                      <span className="product__author">Марсель Руссо</span>
                      <h3 className="product__title">Охота Амура</h3>
                      <span className="product__props">Холст, масло (50х80) </span>
                      <div className="product__price">14 500 руб</div>
                      <button className="btn-reset button button__product">В корзину</button>
                    </div>
                  </article>
                </li>
                <li className="catalog__item">
                  <article className="product">
                    <picture>
                      <img src={product1} alt="product"/>
                    </picture>
                    <div className="product__content">
                      <span className="product__author">Марсель Руссо</span>
                      <h3 className="product__title">Охота Амура</h3>
                      <span className="product__props">Холст, масло (50х80) </span>
                      <div className="product__price">14 500 руб</div>
                      <button className="btn-reset button button__product">В корзину</button>
                    </div>
                  </article>
                </li>
                <li className="catalog__item">
                  <article className="product">
                    <picture>
                      <img src={product1} alt="product"/>
                    </picture>
                    <div className="product__content">
                      <span className="product__author">Марсель Руссо</span>
                      <h3 className="product__title">Охота Амура</h3>
                      <span className="product__props">Холст, масло (50х80) </span>
                      <div className="product__price">14 500 руб</div>
                      <button className="btn-reset button button__product">В корзину</button>
                    </div>
                  </article>
                </li>
                <li className="catalog__item">
                  <article className="product">
                    <picture>
                      <img src={product1} alt="product"/>
                    </picture>
                    <div className="product__content">
                      <span className="product__author">Марсель Руссо</span>
                      <h3 className="product__title">Охота Амура</h3>
                      <span className="product__props">Холст, масло (50х80) </span>
                      <div className="product__price">14 500 руб</div>
                      <button className="btn-reset button button__product">В корзину</button>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="newbies">
          <img src={background} alt="background"/>
          <div className="container container-newbies">
            <div className="newbies-top">
              <div className="newbies-header">
                <img src={star} alt="star"/>
                <h3>Новая коллекция французских авторов</h3>
              </div>
              <div className="newbies-description">
                <p>
                  Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою
                  очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.
                </p>
                <br/>
                <p>
                  Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую
                  востребованность направлений прогрессивного развития.
                </p>
                <div>
                  <a className="newbies-btn" href="#">Ознакомиться</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <div className="about-body">
              <div className="frame-body">
                <img className="frame" src={frame} alt="frame"/>
                <img className="hand" src={hand} alt="hand"/>
              </div>
              <div className="about-box">
                <h3>Наша команда</h3>
                <p>
                  Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение
                  экспериментов, поражающих <br/> по своей масштабности и грандиозности. Мы вынуждены отталкиваться от
                  того, что консультация с широким активом.
                </p>
                <div className="avatar-box">
                  <img src={avatar1} alt="avatar1"/>
                  <img src={avatar2} alt="avatar2"/>
                  <img src={avatar3} alt="avatar3"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-box">
            <div className="footer-box-left">
              <div className="box-item">
                <img className="logo" src={logo} alt="logo"/>
                <span className="logo-name">Ink. House</span>
              </div>
              <a className="footer-tel" href="tel:+79995435454">+7 (999) 543-54-54</a>
              <span className="footer-tel-desc">Мастерская</span>
            </div>
            <div className="footer-box-center">
              <div className="reproduction">
                <ul className="footer-box-list">
                  <li className="footer-box-title">Репродукции</li>
                  <li className="footer-box-description"><a href="#">Франция</a></li>
                  <li className="footer-box-description"><a href="#">Германия</a></li>
                  <li className="footer-box-description"><a href="#">Англия</a></li>
                </ul>
              </div>
              <div className="novelty">
                <ul className="footer-box-list">
                  <li className="footer-box-title">Новинки</li>
                  <li className="footer-box-description"><a href="#">2021</a></li>
                  <li className="footer-box-description"><a href="#">2020</a></li>
                </ul>
              </div>
              <div className="us">
                <ul className="footer-box-list">
                  <li className="footer-box-title">О нас</li>
                  <li className="footer-box-description"><a href="#">Художники</a></li>
                  <li className="footer-box-description"><a href="#">Менеджеры</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-box-right">
              <div className="social">
                <a href="#">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.402 18V11.034H14.735L15.084 8.326H12.402V6.598C12.402 5.814 12.62 5.279 13.744 5.279H15.178V2.857C14.4838 2.78334 13.7861 2.74762 13.088 2.75C11.021 2.75 9.606 4.012 9.606 6.33V8.326H7.268V11.034H9.606V18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H12.402Z" fill="#2C2D35"/>
                  </svg>
                </a>
                <a href="#">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z" fill="#2C2D35"/>
                  </svg>
                </a>
                <a href="#">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.543 2.498C20 4.28 20 8 20 8C20 8 20 11.72 19.543 13.502C19.289 14.487 18.546 15.262 17.605 15.524C15.896 16 10 16 10 16C10 16 4.107 16 2.395 15.524C1.45 15.258 0.708 14.484 0.457 13.502C2.98023e-08 11.72 0 8 0 8C0 8 2.98023e-08 4.28 0.457 2.498C0.711 1.513 1.454 0.738 2.395 0.476C4.107 -1.78814e-07 10 0 10 0C10 0 15.896 -1.78814e-07 17.605 0.476C18.55 0.742 19.292 1.516 19.543 2.498ZM8 11.5L14 8L8 4.5V11.5Z" fill="#2C2D35"/>
                  </svg>
                </a>
              </div>
              <small className="copyright">
                Ink. House <sup>®</sup>
                <br/>
                All rights reserved
              </small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
