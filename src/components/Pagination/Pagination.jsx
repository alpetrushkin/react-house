import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss';

const Pagination = ({callback}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={(event) => callback(event.selected + 1)}
      pageRangeDisplayed={6}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;