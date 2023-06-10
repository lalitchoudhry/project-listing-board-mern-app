import React, { useState } from 'react'

// style import
import styles from './Modal.module.css';

// constants import

// all components import
import Input from '../Input/Input';
import Button from '../Button/Button';
import FeedbackBanner from '../FeedbackBanner/FeedbackBanner';

function AddProductModel({modalTitle, inputFields, btnTitle, input, setInput, toggleLoginModal}) {

    // all states and variables
    const [error, setError] = useState(false);

    // funtions
    const handleChange = (e)=>{
        setInput({...input, [e.target.name]: e.target.value});
    };

    const handleSubmit = () => {
        for (const value in input) {
          if (input[value].length === 0) {
            setError('true');
            return;
          }
        }
        // registerUserData();
      }

    // useEffects

  return (
    <div className={styles.container}>
        <form action="post" className={styles.add_product_form}>
            <h1>{modalTitle}</h1>
            {inputFields.map((element=><Input
                key={element.key}
                value={input[element.name]}
                {...element}
                error={error}
                handleChange={handleChange} 
            />))}
            {btnTitle === 'Signup' && <p className={styles.login_line}>Already have an account? <span onClick={toggleLoginModal}>Log in</span></p>}
            <Button title={btnTitle} handleSubmit={handleSubmit}/>
        </form>
        <div className={styles.feedback_banner}>
          <FeedbackBanner />
        </div>
    </div>
  )
}

export default AddProductModel;