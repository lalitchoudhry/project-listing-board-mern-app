import React from 'react';
import { v4 as uuid } from 'uuid';

// style import
import styles from './Filter.module.css';

// constant import
import { FILTER_TYPE } from '../../data/filterConstant';

function Filter({ setFilterCategory, filterCategory }) {

  // functions
  const handleClick = (value) => {
    setFilterCategory(value)
  }
  return (
    <div className={styles.container}>
      <div className={styles.text_section}>
        <h1>Feedback</h1>
        <p>Apply Filter</p>
      </div>
      <div className={styles.filter_section}>
        {FILTER_TYPE.map((element => <div
          className={`${styles.filter_card} ${filterCategory === element.value && styles.active}`}
          key={uuid()}
          onClick={() => handleClick(element.value)}
        >{element.label}</div>))}
      </div>
    </div>
  )
}

export default Filter;