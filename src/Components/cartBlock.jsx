import React from 'react';
import Styles from '../scss/cart.module.scss';
import Cross from '../img/3669378_clear_ic_icon.png';
import { useDispatch } from 'react-redux';
import { minusItem, RemoveProduct, PlusItem } from '../redux/slices/cartSlice';

const CartBlock = ({ id, title, prices, count, imgUrl, Model, Mem }) => {
  const priceNumber = parseFloat(prices.replace('$', '').replace(',', ''));
  const itemTotalPrice = priceNumber * count;
  const dispach = useDispatch();
  const OnclickPlus = () => {
    dispach(PlusItem(id));
  };
  const onClickMinus = () => {
    dispach(minusItem(id));
  };
  const OnclickRemove = () => {
    dispach(RemoveProduct(id));
  };

  return (
    <div className={Styles.box}>
      <div className={Styles.Content}>
        <div className={Styles.Name}>
          <img src={imgUrl} alt="" />
          <div className={Styles.TitleBox}>
            <h1>{title}</h1>
            <p>{Model.name}</p>
            <p> {Mem}</p>
          </div>
        </div>
        <div className={Styles.contRemove}>
          <div className={Styles.Price}>
            <p>${itemTotalPrice.toFixed(2)}</p>
          </div>
          <div className={Styles.addRemove}>
            <button onClick={onClickMinus}>-</button>
            <span>{count}</span>
            <button onClick={OnclickPlus}>+</button>
          </div>
          <div className={Styles.Result}>
            <span>{prices}</span>
          </div>
          <div className={Styles.RemoveCross}>
            <img onClick={OnclickRemove} src={Cross} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBlock;
