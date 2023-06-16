import React from 'react';
import styles from './Sort.module.css';

const Sort = ({value, onClickActiveSort}) => {

  const [open, setOpen] = React.useState(false);
  const list = [
    {name: "сначала популярные", sortProperty: "rating"},
    {name: "сначала непопулярные", sortProperty: "-rating"},
    {name: "сначала дорогие", sortProperty: "price"},
    {name: "сначала дешевые", sortProperty: "-price"},
    {name: "по автору от А до Я", sortProperty: "-author"},
    {name: "по автору от Я до А", sortProperty: "author"}
  ];

  const onClickActiveSortHandler = (obj) => {
    onClickActiveSort(obj);
    setOpen(false);
  }

  return (
    <div className={styles.root}>
      <b>Сортировка:</b> <span onClick={() => setOpen(!open)}>{value.name}</span>
      <div className={styles.sort}>
        {open
          && (<ul className={styles.sortBox}>
            {list.map((obj, index) => {
              return (
                <li
                  onClick={() => onClickActiveSortHandler(obj)}
                  className={value.sortProperty === obj.sortProperty ? styles.active : ''}>
                  {obj.name}
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