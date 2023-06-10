import React from 'react';

// style import
import styles from './HomeBanner.module.css';

// assets import
import homeImg from '../../assets/images/bannerImg.png';

function HomeBanner() {
  return (
    <div className={styles.container}>
        <img className={styles.bannerImg} src={homeImg} alt="img" />
        <div className={styles.text_section}>
            <h1 className={styles.primary_text}>Add your products and give your valuable feedback</h1>
            <p className={styles.secondary_text}>Easily give your feedback in a matter of minutes. Access your audience on all platforms. Observe result manually in real time</p>
        </div>
    </div>
  )
}

export default HomeBanner;