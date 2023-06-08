import React from 'react';

// import style 
import styles from './Button.module.css';

function Button({handleSubmit, title}) {
  return (
    <button
        className={styles.container}
        onClick={handleSubmit}
    >{title}</button>
  )
}

export default Button;