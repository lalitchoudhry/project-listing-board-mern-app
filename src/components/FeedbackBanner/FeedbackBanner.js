import React from 'react';

// style import
import styles from './FeedbackBanner.module.css';

function FeedbackBanner() {
  return (
    <div className={styles.container}>
        <h1>Feedback</h1>
        <p>Add your products and give us your valuable feedback</p>
    </div>
  )
}

export default FeedbackBanner;