import React, { useEffect, useRef, useState } from 'react';

// style import
import styles from './SortBox.module.css';
import Button from '../Button/Button';

// assets import
import voteArrowUp from '../../assets/icons/voteArrowUp.png';

function SortBox({toggleAddProductModel, toggleSort, products}) {

    // all states ans variable
    const [voteCommentSort, setVoteCommentSort] = useState('Upvotes');
    const firstUpdate = useRef(true);

    // functions
    const handleSortClick = ()=>{
        if (voteCommentSort === 'Upvotes') {
            setVoteCommentSort("Comment")
        } else {
            setVoteCommentSort("Upvotes")
        }
    }

    // useEffects
    useEffect(()=>{
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return
        }
        toggleSort(voteCommentSort)
    }, [voteCommentSort])

  return (
    <div className={styles.container}>
        <div className={styles.sort_box}>
            <div className={styles.suggestion}>{products.length} Suggestion</div>
            <div className={styles.sort_btn}>Sort by: 
                <span onClick={handleSortClick}>
                    {voteCommentSort} <img src={voteArrowUp} alt=""/>
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