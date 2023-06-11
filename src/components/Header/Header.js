import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';

// style import
import styles from './Header.module.css';

// utils import
import { Context } from '../../utils/context';

// assets import
import profileImg from '../../assets/images/profile.jpg';

function Header() {

  // states and variables
  const navigate = useNavigate();
  const {auth} = useContext(Context);

  // functions
  const handleLogout = () => {

    localStorage.clear();
    navigate("/login");
  }

  return (
    <header className={styles.container}>
      <div className={styles.text}>Feedback</div>
      {!auth ?<div className={styles.btn_box}>
        <Link className={styles.log_btn} to="/login" >Log in</Link>
        <Link className={styles.sign_btn} to="/register" >Sign up</Link>
      </div>
      :
      <div className={styles.btn_box}>
        <Link className={styles.log_btn} to="/login" onClick={handleLogout}>Log out</Link>
        <p className={styles.log_btn}>Hello!</p>
        <img className={styles.profile_img} src={profileImg} alt="" />
      </div>}
    </header>
  )
}

export default Header;