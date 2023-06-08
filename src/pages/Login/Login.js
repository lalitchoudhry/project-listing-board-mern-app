import React from 'react';

// style imports
import styles from './Login.module.css';

// all components imports
import LoginBox from '../../components/LoginComp/LoginBox'
import FeedbackBanner from '../../components/FeedbackBanner/FeedbackBanner';

function Login() {
  return (
    <div className={styles.container}>
      <FeedbackBanner />
      <LoginBox />
    </div>
  )
}

export default Login;