import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// style imports
import styles from './LoginBox.module.css';

// all components imports
import Input from '../Input/Input';
import Button from '../Button/Button';

function LoginBox() {

  // states and variable
  const navigate = useNavigate();
  const [error, setError] = useState(false)
  const [inputs, setInputs] = useState({
    emailOrMobile: "",
    password: ""
  })

  // functions
  const loginUserData = async () => {
    // const userData = JSON.stringify(inputs);
    // const result = await loginUser(userData);
    // if (!result) return alert("Invalid");
    // if (result === 400) {
    //   alert("Fill All Inputs");
    //   return;
    // }
    // localStorage.setItem("user", JSON.stringify(result))
    navigate("/");
  }

  const updateInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    for (const value in inputs) {
      if (inputs[value].length === 0) {
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
          name="emailOrMobile"
          type="text"
          value={inputs.emailOrMobile}
          error={error}
          placeholder="Email"
          errormessage="Invalid email"
          handleChange={updateInput}
        />
        <Input
          label={<i className="bi bi-lock-fill"></i>}
          name="password"
          type="password"
          value={inputs.password}
          error={error}
          placeholder="Password"
          errormessage="Invalid password"
          handleChange={updateInput}
        />
      </form>
      <div className={styles.sign_up_btn}>Don't have an account? <Link to="/login" >Sign up</Link></div>
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