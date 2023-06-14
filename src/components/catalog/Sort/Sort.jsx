import React from 'react';
import styles from './Sort.module.css';

const Sort = ({value, onClickActiveSort}) => {
  const [open, setOpen] = React.useState(false);
  const sortName = ["сначала популярные", "сначала недорогие",  "сначала дорогие", "по алфавиту от А до Я", "по алфавиту от Я до А"];

  const onClickActiveSortHandler = (index) => {
    onClickActiveSort(index);
    setOpen(false);
  }

  return (
    <div className={styles.root}>
      <b>Сортировка:</b> <span onClick={() => setOpen(!open)}>{sortName[value]}</span>
      <div className={styles.sort}>
        {open
          && (<ul className={styles.sortBox}>
            {sortName.map((sorted, index) => {
              return (
                <li
                  onClick={() => onClickActiveSortHandler(index)}
                  className={value === index ? styles.active : ''}>
                  {sorted}
                </li>
              )
            })}
          </ul>)
        }
      </div>
    </div>
  );
};

export default Sort;