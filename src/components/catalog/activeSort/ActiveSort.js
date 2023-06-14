import React from 'react';

const ActiveSort = ({value, onClickActive}) => {
  const sortName = ['Франция', 'Германия', 'Англия'];

  const activeNameSort = sortName.map((el, i) => {
    return (
      <li key={i} className="catalog-tabs__item">
        <button
          onClick={()=>onClickActive(i)}
          className={value === i
            ? "btn-reset catalog-tabs__btn catalog-tabs__btn--active"
            : "btn-reset catalog-tabs__btn"}>
          {el}
        </button>
      </li>
    )
  });

  return <>{activeNameSort}</>


};

export default ActiveSort;