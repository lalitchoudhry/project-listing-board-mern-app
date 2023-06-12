import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

// style imports
import styles from './RegisterBox.module.css';

// import constants
import { SIGNUP_INPUT_FIELD } from '../../data/inputConstants';

// all apis imports

// utils import
import { Context } from '../../utils/context';

// all components imports
import Input from '../Input/Input';
import Button from '../Button/Button';

function RegisterBox() {

  // all states and variables
  const { signupInput, setSignupInput, registerUserData} = useContext(Context);
  const [error, setError] = useState(false);

  // functions
  const updateInput = (e) => {
    setSignupInput({ ...signupInput, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    for (const value in signupInput) {
      if (signupInput[value].length === 0) {
        setError('true');
        return;
      }
    }
    registerUserData();
  }

  

  // useEffescts

  return (
    <div className={styles.register_box}>
      <form action="post" className={styles.register_form}>
        {SIGNUP_INPUT_FIELD.map((element => <Input
          key={uuid()}
          value={signupInput[element.name]}
          {...element}
          error={error}
          handleChange={updateInput}
        />))}
      </form>
      <div className={styles.log_in_btn}>Already have an account? <Link to="/login" >Log in</Link></div>
      <div className={styles.btn_box}>
        <Button
          handleSubmit={handleSubmit}
          title="Sign up"
        />
      </div>
    </div>
  )
}

export default RegisterBox;