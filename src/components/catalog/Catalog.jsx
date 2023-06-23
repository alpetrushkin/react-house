import React from 'react';
import Cards from "./Cards/Cards";
import FilterLocation from "./FilterLocation/FilterLocation";
import Pagination from "../Pagination/Pagination";
import Sort from "./Sort/Sort";
import {SearchContext} from "../../App";
import './catalog.css';

import { useSelector, useDispatch } from 'react-redux'
import { setLocation } from '../../redux/slice/filterSlice'

const Catalog = () => {
  const dispatch = useDispatch()
  const locationFilter = useSelector((state) => state.filter.location)
  const sortNameActive = useSelector((state) => state.filter.sort.sortProperty)

  const onChangeLocation = (id) => {
    dispatch(setLocation(id))
  }



  const {searchTitle} = React.useContext(SearchContext);
  const [item, setItem] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);

    const search = searchTitle ? `&q=${searchTitle}` : '';
    const category = locationFilter > 0 ? `&locationId=${locationFilter}` : '';
    const order = sortNameActive.includes('-') ? 'asc' : 'desc';
    const sortBy = sortNameActive.replace('-', '');
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
  }, [sortNameActive, locationFilter, searchTitle, currentPage]);

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog-top">
          <h2 className="catalog-name">Репродукция</h2>
          <Sort />
          <ul className="catalog-tabs">
            <FilterLocation
              value={locationFilter}
              onClickActive={onChangeLocation}
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