import React from 'react';

// style import
import styles from './Filter.module.css';

// constant import
import { FILTER_TYPE } from '../../data/filterConstant';

function Filter() {
  return (
    <div className={styles.container}>
        <div className={styles.text_section}>
            <h1>Feedback</h1>
            <p>Apply Filter</p>
        </div>
        <div className={styles.filter_section}>
            {FILTER_TYPE.map((element=><div
                className={styles.filter_card}
                key={element.key}
            >{element.label}</div>))}
        </div>
    </div>
  )
}

export default Filter;