import React from 'react';
import styles from '../../myCss/index.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  const handleChange = event => {
    const newFilter = event.target.value;
    dispatch(setFilter(newFilter));
  };

  return (
    <input
      className={styles.decorInput}
      type="text"
      name="filter"
      value={value}
      onChange={handleChange}
      placeholder="Enter name for Search"
    />
  );
};

export default Filter;
