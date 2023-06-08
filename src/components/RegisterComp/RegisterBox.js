import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// style imports
import styles from './RegisterBox.module.css';

// import constants
import { INPUT_FIELD } from '../../data/inputConstants';

// all components imports
import Input from '../Input/Input';
import Button from '../Button/Button';

function RegisterBox() {

  // all states and variables
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    name: "",
    mobile: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(false);

  // functions
  const updateInput = (e)=>{
    setInputs({...inputs, [e.target.name]: e.target.value});
  }

  const handleSubmit = () => {
    for (const value in inputs) {
      console.log(inputs)
      if (inputs[value].length === 0) {
        setError('true');
        return;
      }
    }
    registerUserData();
  }

  const registerUserData = async()=>{

    // const userData = JSON.stringify(inputs);
    // const result = await registerUser(userData);
    // if (!result) return;
    // if (result === 403) {
    //   navigate("/login");
    //   return;
    // }
    // if (result === 400) {
    //   alert("Fill All Inputs");
    //   return;
    // }
    // localStorage.setItem("user", JSON.stringify(result))
    navigate("/");
  }

  // useEffescts

  return (
    <div className={styles.register_box}>
            <form action="post" className={styles.register_form}>
                {INPUT_FIELD.map((element=><Input
                  key={element.key}
                  value={inputs[element.name]}
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