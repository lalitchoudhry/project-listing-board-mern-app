import React, { useState } from 'react';

// style import
import styles from './SortBox.module.css';
import Button from '../Button/Button';

// assets import
import voteArrowUp from '../../assets/icons/voteArrowUp.png';
import voteArrowDown from '../../assets/icons/voteArrowDown.png';

function SortBox({toggleAddProductModel, toggleSort, products}) {

    // all states ans variable
    const [upDownSort, setUpDownSort] = useState(true);

    // functions
    const handleSortClick = ()=>{
        setUpDownSort(!upDownSort);
        toggleSort();
    }

    // useEffects

  return (
    <div className={styles.container}>
        <div className={styles.sort_box}>
            <div className={styles.suggestion}>{products.length} Suggestion</div>
            <div className={styles.sort_btn}>Sort by: 
                <span onClick={handleSortClick}>
                    Upvotes {upDownSort?<img src={voteArrowUp} alt=""/>:<img src={voteArrowDown} alt='' />}
                </span>
            </div>
        </div>
        <div className={styles.btn_box}>
            <Button title="+ Add Product" handleSubmit={toggleAddProductModel}/>
        </div>
    </div>
  )
}

export default SortBox;