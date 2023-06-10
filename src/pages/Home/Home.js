import React, { useState } from 'react';

// style imports
import styles from './Home.module.css';

// all constant imports
import { ADD_PRODUCT_INPUT, LOGIN_INPUT_FIELD, SIGNUP_INPUT_FIELD } from '../../data/inputConstants';

// all components import
import Header from '../../components/Header/Header';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import SortBox from '../../components/SortBox/SortBox';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import Modal from '../../components/Modal/Modal';

function Home() {

  // all states and variable
  const [showAddProductModel, setShowAddProductModel] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [addProductInputs, setAddProductInputs] = useState({
    name: '',
    category: '',
    imgUrl: '',
    link: '',
    description: ''
  });

  // funtions
  const toggleAddProductModel = ()=>{
    setShowAddProductModel(!showAddProductModel);
  }

  const toggleLoginModal = ()=>{
    setShowAddProductModel(false);
    setShowLoginModal(!showLoginModal);
  }

  // useEffects

  return (
    <div className={styles.container}>
      <Header />
      <HomeBanner />
      <div className={styles.product_listing_section}>
        <Filter />
        <div className={styles.product_box}>
          <SortBox toggleAddProductModel={toggleAddProductModel} />
          <div className={styles.products_listing}>
            <ProductCard />
          </div>
        </div>
      </div>
      {showAddProductModel && <Modal 
        modalTitle="Add your products"
        inputFields={ADD_PRODUCT_INPUT}
        btnTitle="+ Add"
        input={addProductInputs}
        setInput={setAddProductInputs}
      />}
      {showAddProductModel && <Modal 
        modalTitle="Signup to continue"
        inputFields={SIGNUP_INPUT_FIELD}
        btnTitle="Signup"
        input={addProductInputs}
        setInput={setAddProductInputs}
        toggleLoginModal={toggleLoginModal}
      />}
      {showLoginModal && <Modal
        modalTitle="Login to continue"
        inputFields={LOGIN_INPUT_FIELD}
        btnTitle="Login"
        input={addProductInputs}
        setInput={setAddProductInputs}
      />}
    </div>
  )
}

export default Home;