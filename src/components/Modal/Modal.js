import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

// style import
import styles from './Modal.module.css';

// constants import

// all components import
import Input from '../Input/Input';
import Button from '../Button/Button';
import FeedbackBanner from '../FeedbackBanner/FeedbackBanner';

function AddProductModel({ modalTitle, inputFields, btnTitle, input, setInput, toggleLoginModal, submit, setShowModal, toggleModal }) {

  // all states and variables
  const [error, setError] = useState(false);

  // funtions
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    for (const value in input) {
      if (input[value].length === 0) {
        setError('true');
        return;
      }
    }
    submit();
    event.preventDefault();
    setShowModal(false);
  }

  // useEffects

  return (
    <div className={styles.container}>
      <button className={styles.cross_btn} onClick={toggleModal}>x</button>
      <form className={styles.add_product_form}>
        <h1>{modalTitle}</h1>
        {inputFields.map((element => <Input
          key={uuid()}
          value={input[element.name]}
          {...element}
          error={error}
          handleChange={handleChange}
        />))}
        {btnTitle === 'Signup' && <p className={styles.login_line}>Already have an account? <span onClick={toggleLoginModal}>Log in</span></p>}
        <Button title={btnTitle} handleSubmit={handleSubmit} />
      </form>
      <div className={styles.feedback_banner}>
        <FeedbackBanner />
      </div>
    </div>
  )
}

export default AddProductModel;