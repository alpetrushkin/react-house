import React from 'react';
import styles from './Sort.module.css';

import { useSelector, useDispatch } from 'react-redux'
import { setSortName } from '../../../redux/slice/filterSlice'

const Sort = () => {
  const dispatch = useDispatch()
  const sortName = useSelector((state) => state.filter.sort)


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
    dispatch(setSortName(obj))
    setOpen(false);
  }

  return (
    <div className={styles.root}>
      <b>Сортировка:</b> <span onClick={() => setOpen(!open)}>{sortName.name}</span>
      <div className={styles.sort}>
        {open
          && (<ul className={styles.sortBox}>
            {list.map((obj, index) => {
              return (
                <li
                  onClick={() => onClickActiveSortHandler(obj)}
                  className={sortName.sortProperty === obj.sortProperty ? styles.active : ''}>
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