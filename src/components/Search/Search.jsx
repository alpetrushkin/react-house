import React from 'react';
import {SearchContext} from "../../App";
import styles from './Search.module.css';

const Search = () => {
  const {searchTitle, setSearchTitle} = React.useContext(SearchContext);
  const [searchVisible, setSearchVisible] = React.useState(true);

  const onChangeHandler = (event) => {
    let title = (event.currentTarget.value)
    setSearchTitle(title)
  }

  const closeSearch = () => {
    setSearchVisible(true);
    setSearchTitle('');
  }

  return (
    <div className={styles.root}>
      {
        searchVisible ?
          (
            <svg onClick={() => setSearchVisible(false)} xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5" stroke="currentColor"
                 className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
            </svg>
          )
          : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth="1.5" stroke="currentColor"
                   className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
              </svg>
              <input
                value={searchTitle}
                onChange={onChangeHandler}
                className={styles.input}
                placeholder={'Поиск'}
              />
              <svg onClick={closeSearch} xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </>)
      }
    </div>


  );
};

export default Search;