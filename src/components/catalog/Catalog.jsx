import React from 'react';
import Cards from "./Cards/Cards";
import FilterLocation from "./FilterLocation/FilterLocation";
import Pagination from "../Pagination/Pagination";
import Sort from "./Sort/Sort";
import './catalog.css';

const Catalog = ({searchTitle}) => {
  const [item, setItem] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filterLocation, setFilterLocation] = React.useState(0);
  const [activeSortName, setActiveSortName] = React.useState(
    {name: 'сначала популярные', sortProperty: 'rating'}
  );
  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);

    const search = searchTitle ? `&q=${searchTitle}` : '';
    const category = filterLocation > 0 ? `locationId=${filterLocation}` : '';
    const order = activeSortName.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = activeSortName.sortProperty.replace('-', '');
    const page = `_page=${currentPage}&_limit=6`;

    fetch(
      `http://localhost:3002/items?${page}${category}${search}&_sort=${sortBy}&_order=${order}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItem(data);
        setIsLoading(false);
      })
    window.scrollTo(0, 0)
  }, [activeSortName, filterLocation, searchTitle, currentPage]);

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog-top">
          <h2 className="catalog-name">Репродукция</h2>
          <Sort
            value={activeSortName}
            onClickActiveSort={(id) => setActiveSortName(id)}
          />
          <ul className="catalog-tabs">
            <FilterLocation
              value={filterLocation}
              onClickActive={(id) => setFilterLocation(id)}
            />
          </ul>
        </div>
        <div className="catalog-bottom">
          <ul className="catalog-list">
            {isLoading
              ? ([...new Array(6)].map((_, index) => <h1>Loading...</h1>))
              : (item.map((obj, index) => {
                return (
                  <Cards key={index} {...obj} />
                )
              }))
            }
          </ul>
        </div>
        <Pagination callback={number => setCurrentPage(number)} />
      </div>
    </section>
  );
};

export default Catalog;