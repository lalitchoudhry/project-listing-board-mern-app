import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// style imports
import styles from './LoginBox.module.css';

// utils import
import { Context } from '../../utils/context';

// all components imports
import Input from '../Input/Input';
import Button from '../Button/Button';

function LoginBox() {

  // states and variable
  const { loginInput, setLoginInput, loginUserData } = useContext(Context);
  const [error, setError] = useState(false);

  // functions
  

  const updateInput = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    for (const value in loginInput) {
      if (loginInput[value].length === 0) {
        setError('true');
        return;
      }
    }
    loginUserData();
  }

  // useEffects

  return (
    <div className={styles.login_box}>
      <form action="post" className={styles.login_form}>
        <Input
          label={<i className="bi bi-envelope"></i>}
          name="email"
          type="text"
          value={loginInput.email}
          error={error}
          placeholder="Email"
          errormessage="Invalid email"
          handleChange={updateInput}
        />
        <Input
          label={<i className="bi bi-lock-fill"></i>}
          name="password"
          type="password"
          value={loginInput.password}
          error={error}
          placeholder="Password"
          errormessage="Invalid password"
          handleChange={updateInput}
        />
      </form>
      <div className={styles.sign_up_btn}>Don't have an account? <Link to="/register" >Sign up</Link></div>
      <div className={styles.btn_box}>
        <Button
          handleSubmit={handleSubmit}
          title="Log in"
        />
      </div>
    </div>
  )
}

export default LoginBox;