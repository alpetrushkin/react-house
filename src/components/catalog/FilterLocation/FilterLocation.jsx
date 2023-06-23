import React from 'react';

const FilterLocation = ({value, onClickActive}) => {
  const filterName = ['Все', 'Франция', 'Германия', 'Англия'];

  const activeFilterLocation = filterName.map((el, i) => {
    return (
      <li key={el} className="catalog-tabs__item">
        <button
          onClick={() => onClickActive(i)}
          className={value === i
            ? "btn-reset catalog-tabs__btn catalog-tabs__btn--active"
            : "btn-reset catalog-tabs__btn"}>
          {el}
        </button>
      </li>
    )
  });

  return <>{activeFilterLocation}</>


};

export default FilterLocation;