import React from 'react';
import './NotFoundBlock.css';
import {Link} from "react-router-dom";

const NotFoundBlock = () => {
  return (
    <div className="root">
      <div className="container">
        <div className="error">
          <h1>Ошибка 404</h1>
          <div className="error-desc">Страница, на которую вы попали, не существует. Вы можете попробовать следующее:
          </div>
          <ul>
            <li className="error-list">
              <Link to="/" className="error-link">
                Перейти к главной странице сайта
              </Link>
            </li>
            <li className="error-list">Проверить правильность введенного адреса</li>
            <li className="error-list">Вернуться туда, откуда пришли (<i>нажать кнопку «Назад» в своем браузере</i>)
            </li>
          </ul>
        </div>
        <div className="error-img">
          <img src="https://i.yapx.cc/VakAF.gif" alt="error"/>
        </div>
      </div>
    </div>
  );
};

export default NotFoundBlock;