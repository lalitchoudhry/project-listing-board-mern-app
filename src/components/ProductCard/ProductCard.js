import React, { useState, useEffect, useRef, useContext } from 'react';
import { v4 as uuid } from 'uuid';

// style import
import styles from './ProductCard.module.css';
import Button from '../Button/Button';

// utils import
import { Context } from '../../utils/context';

// all apis import
import { updateProduct } from '../../apis/product';

// assets import
import voteArrowUp from '../../assets/icons/voteArrowUp.png';
import commentIcon from '../../assets/icons/comment.png';
import commentWhite from '../../assets/icons/commentWhite.png';
import sendPlane from '../../assets/icons/plane.png';

function ProductCard({_id, name, imgUrl, vote, description, comments, category, commentLength }) {

    // all states and variables
    const { auth } = useContext(Context)
    const [voteCount, setVoteCount] = useState(vote);
    const [commentCount, setCommentCount] = useState(commentLength)
    const [showComment, setshowComment] = useState(false);
    const [commentArray, setCommentArray] = useState(comments);
    const [input, setInput] = useState('')
    const firstUpdate = useRef(true);

    // functions
    const handleEdit = ()=>{
        alert("There is no explanation about edit button, So yet to be completed edit function")
    }
    const clickIncreaseVote = () => {
        setVoteCount(voteCount + 1);
    }

    const handleShowComment = () => {
        setshowComment(!showComment);
    }

    const handleCommentChange = (e)=>{
        setInput(e.target.value)
    }

    const handlePostComment = ()=>{
        if (input === "" || input === ' ') {
            alert("Invalid comment")
            return
        }
        setCommentCount(commentCount + 1);
    }

    const updateComment = async()=>{
        // const auth = JSON.parse(localStorage.getItem("user"));
        let commentBody = {
            comments: input,
            commentLength: commentCount
        }
        const result = await updateProduct(_id, commentBody);
        if (!result) {
          return
        }
        setCommentArray([input, ...commentArray]);
        setInput('');
        // fetchAllProducts();
    }

    const updateVoteCount = async()=>{
        let voteBody = {
            vote: voteCount
        }
        const result = await updateProduct(_id, voteBody);
        if (!result) {
          return
        }
    }

    // useEffects
    useEffect(()=>{
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return
        }
        updateVoteCount()
    }, [voteCount])

    useEffect(()=>{
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return
        }
        updateComment()
    }, [commentCount])

    return (
        <div className={styles.container}>
            <div className={styles.product_section}>
                <div className={styles.img_box}>
                    <img src={imgUrl} alt="" />
                </div>
                <div className={styles.detail_box}>
                    <div className={styles.text_section}>
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <div className={styles.category_section}>
                            {category.map(element => <div key={uuid()} className={styles.category_card}>{element}</div>)}

                            <div className={styles.comment_icon} onClick={()=>handleShowComment(_id)}>
                                <img src={commentWhite} alt="" />
                                <span>Comment</span>
                            </div>
                            {auth && <div className={styles.btn}>
                            <Button
                                title="Edit"
                                handleSubmit={handleEdit}
                            /></div>}
                        </div>
                    </div>
                    <div className={styles.vote_section}>
                        <div className={styles.vote_btn} onClick={clickIncreaseVote}>
                            <img src={voteArrowUp} alt="" />
                            {voteCount}
                        </div>
                        <div className={styles.comment_count_btn} onClick={handleShowComment}>
                            <span>{commentLength}</span>
                            <img src={commentIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {showComment && <div className={styles.comment_section}>
                <div className={styles.input_box}>
                    <input
                        name='comments'
                        value={input}
                        type="text"
                        placeholder='Add a comment'
                        onChange={handleCommentChange}
                    />
                    <button onClick={handlePostComment}><img src={sendPlane} alt="" /></button>
                </div>
                <ul className={styles.comment_box}>
                    {commentArray && commentArray.map(comment => <li key={uuid()} >{comment}</li>)}
                </ul>
            </div>}
        </div>
    )
}

export default ProductCard;