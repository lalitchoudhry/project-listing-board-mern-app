import React from 'react';
import { Link } from 'react-router-dom';

// style import
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
        <div className={styles.text}>Feedback</div>
        <div className={styles.btn_box}>
            <Link className={styles.log_btn} to="/login" >Log in</Link>
            <Link className={styles.sign_btn} to="/register" >Sign up</Link>
        </div>
    </header>
  )
}

export default Header;