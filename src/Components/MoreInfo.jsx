import React from 'react';
import Styles from '../scss/More.module.scss';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import Heart from '../img/heart.png';
import { AccItem } from '../redux/slices/FavSlice';

const MoreInfo = ({ imgUrl, title, Model, text, prices }) => {
  const dispatch = useDispatch();

  const ImportToCart = () => {
    const item = {
      id: Model.name,
      imgUrl,
      title,
      Model,
      prices,
      count: 1,
    };
    dispatch(addProduct([item]));
  };
  const importToFav = () => {
    const item = {
      id: Model.name,
      imgUrl,
      title,
      Model,
      count: 1,
    };
    dispatch(AccItem([item]));
  };
  return (
    <div className={Styles.box}>
      <div className={Styles.imgBlock}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={Styles.modelblock}>
        <div className={Styles.titleblock}>
          <h1>
            {title} {Model.name}
          </h1>
        </div>
        <div className={Styles.textBlock}>
          <p>{text}</p>
        </div>
        <div className={Styles.cont}>
          <p>Price: {prices}</p>
          <div className={Styles.cont__button}>
            <Link to="/Cart">
              <button onClick={ImportToCart}>buy</button>
            </Link>
            <button className={Styles.heartbtn} onClick={importToFav}>
              <img src={Heart} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
