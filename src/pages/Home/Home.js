import React, { useContext, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

// style imports
import styles from './Home.module.css';

// all apis imports
import { postProduct, getAllProducts, getFilteredProducts } from '../../apis/product';

// all constant imports
import { ADD_PRODUCT_INPUT, LOGIN_INPUT_FIELD, SIGNUP_INPUT_FIELD } from '../../data/inputConstants';

// utils import
import { Context } from '../../utils/context';

// all components import
import Header from '../../components/Header/Header';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import SortBox from '../../components/SortBox/SortBox';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import Modal from '../../components/Modal/Modal';

function Home() {

  // all states and variable
  const { signupInput, setSignupInput, loginInput, setLoginInput, registerUserData, loginUserData } = useContext(Context);
  const [showAddProductModel, setShowAddProductModel] = useState(false);
  const [showSignupModal, setShowsignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [addProductInputs, setAddProductInputs] = useState({
    name: '',
    category: '',
    imgUrl: '',
    link: '',
    description: ''
  });
  const [products, setProducts] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [sort, setSort] = useState({ vote: -1 });
  const firstUpdate = useRef(true);

  // funtions
  const toggleSort = (sortType) => {
    if (sortType === "Upvotes") {
      setSort({ vote: -1 })
    } else {
      setSort({ commentLength: -1 })
    }
  }

  const toggleAddProductModel = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
    const auth = JSON.parse(localStorage.getItem("user"));
    if (!auth) {
      setShowsignupModal(!showSignupModal);
      return;
    }
    setShowAddProductModel(!showAddProductModel);
  }

  const toggleLoginModal = () => {
    setShowAddProductModel(false);
    setShowsignupModal(false);
    setShowLoginModal(!showLoginModal);
  }

  const handleAddProduct = async () => {
    const auth = JSON.parse(localStorage.getItem("user"));
    if (!auth) {
      setShowsignupModal(!showSignupModal);
      return;
    }
    const productData = JSON.stringify(addProductInputs);
    const result = await postProduct(productData, auth);
    if (!result) return alert("Invalid");
    if (result === 404) return alert("page not found or server error")
    if (result === 400) {
      alert("Fill All Inputs");
      return;
    }
    setShowAddProductModel(!showAddProductModel);
    fetchAllProducts();
  }

  const fetchAllProducts = async () => {
    const sortPara = JSON.stringify(sort);
    const result = await getAllProducts(sortPara)
    if (!result) {
      return
    }
    setProducts(result);
  }

  const fetchFilterProducts = async () => {
    const sortPara = JSON.stringify(sort);
    const result = await getFilteredProducts(filterCategory, sortPara)
    if (!result) {
      return
    }
    setProducts(result);
  }

  // useEffects
  useEffect(() => {
    fetchAllProducts();
  }, [])

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    }
    fetchFilterProducts()
  }, [filterCategory, sort])

  return (
    <div className={`${styles.container} ${(showAddProductModel || showLoginModal || showSignupModal) && styles.active_modal}`}>
      <Header />
      <HomeBanner />
      <div className={styles.product_listing_section}>
        <Filter
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
        <div className={styles.product_box}>
          <SortBox
            toggleAddProductModel={toggleAddProductModel}
            toggleSort={toggleSort}
            products={products}
          />
          <div className={styles.products_listing}>
            {products && products.map(item => <ProductCard
              key={uuid()}
              {...item}
            />)}
          </div>
        </div>
      </div>
      {showAddProductModel && <Modal
        modalTitle="Add your products"
        inputFields={ADD_PRODUCT_INPUT}
        btnTitle="+ Add"
        input={addProductInputs}
        setInput={setAddProductInputs}
        submit={handleAddProduct}
        setShowModal={setShowAddProductModel}
        toggleModal={toggleAddProductModel}
        />}
      {showSignupModal && <Modal
        modalTitle="Signup to continue"
        inputFields={SIGNUP_INPUT_FIELD}
        btnTitle="Signup"
        input={signupInput}
        setInput={setSignupInput}
        toggleLoginModal={toggleLoginModal}
        submit={registerUserData}
        setShowModal={setShowsignupModal}
        toggleModal={toggleAddProductModel}
        />}
      {showLoginModal && <Modal
        modalTitle="Login to continue"
        inputFields={LOGIN_INPUT_FIELD}
        btnTitle="Login"
        input={loginInput}
        setInput={setLoginInput}
        submit={loginUserData}
        setShowModal={setShowLoginModal}
        toggleModal={toggleLoginModal}
        />}
    </div>
  )
}

export default Home;