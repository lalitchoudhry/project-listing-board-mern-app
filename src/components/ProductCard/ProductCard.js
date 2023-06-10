import React, { useState } from 'react';

// style import
import styles from './ProductCard.module.css';
import Button from '../Button/Button';

// assets import
import voteArrowUp from '../../assets/icons/voteArrowUp.png';
import commentIcon from '../../assets/icons/comment.png';
import commentWhite from '../../assets/icons/commentWhite.png';
import sendPlane from '../../assets/icons/plane.png';

function ProductCard() {

    // all states and variables
    const [voteCount, setVoteCount] = useState(0);
    const [showComment, setshowComment] = useState(false);

    // functions
    const clickIncreaseVote = ()=>{
        setVoteCount(voteCount + 1);
    }

    const handleShowComment = ()=>{
        setshowComment(!showComment);
    }

    // useEffects

  return (
    <div className={styles.container}>
        <div className={styles.product_section}>
            <div className={styles.img_box}>Img</div>
            <div className={styles.detail_box}>
                <div className={styles.text_section}>
                    <h1>name</h1>
                    <p>description</p>
                    <div className={styles.category_section}>
                        <div className={styles.category}>
                            <div className={styles.category_card}>categories</div>
                        </div>
                        <div className={styles.comment_icon} onClick={handleShowComment}>
                            <img src={commentWhite} alt="" />
                            <span>Comment</span>
                        </div>
                        <Button title="Edit" />
                    </div>
                </div>
                <div className={styles.vote_section}>
                    <div className={styles.vote_btn} onClick={clickIncreaseVote}>
                        <img src={voteArrowUp} alt="" />
                        {voteCount}
                    </div>
                    <div className={styles.comment_count_btn} onClick={handleShowComment}>
                        <span>4</span>
                        <img src={commentIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
        {showComment && <div className={styles.comment_section}>
            <div className={styles.input_box}>
                <input type="text" placeholder='Add a comment'/>
                <button><img src={sendPlane} alt="" /></button>
            </div>
            <ul className={styles.comment_box}>
                <li>comment</li>
            </ul>
        </div>}
    </div>
  )
}

export default ProductCard;