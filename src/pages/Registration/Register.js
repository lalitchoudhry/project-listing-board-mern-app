import React from 'react';

// styles imports
import styles from './Register.module.css';

// all components imports
import RegisterBox from '../../components/RegisterComp/RegisterBox'
import FeedbackBanner from '../../components/FeedbackBanner/FeedbackBanner';

function Register() {
  return (
    <div className={styles.container}>
      <FeedbackBanner />
      <RegisterBox />
    </div>
  )
}

export default Register;