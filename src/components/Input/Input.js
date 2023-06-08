import React, { useState } from 'react'

// style import
import styles from './Input.module.css';

function Input(props) {

  const { label, name, type, errormessage, placeholder } = props;
  const { handleChange, value, error } = props;
  const [focused, setFocused] = useState(false);
  const [maxNum, setMaxNum] = useState(''); // for mobile input to limit num 10

  const limitMobNum = (e) => {
    e.target.value.length < 11 && setMaxNum(e.target.value);
    handleChange(e);
  }

  return (
    type === 'number'
      ? <div className={styles.container}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.input_section}>
          <input
            required
            id={name}
            name={name}
            type={type}
            value={maxNum}
            placeholder={placeholder}
            onChange={limitMobNum}
            onBlur={() => setFocused(true)}
            focused={focused.toString()}
          />
          <span className={`${error === 'true' && !focused ? styles.span : styles.error}`}>{errormessage}</span>
        </div>
      </div>
      : <div className={styles.container}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.input_section}>
          <input
            required
            id={name}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={() => setFocused(true)}
            focused={focused.toString()}
          />
          <span className={`${error === 'true' && !focused ? styles.span : styles.error}`}>{errormessage}</span>
        </div>
      </div>
  )
}

export default Input;