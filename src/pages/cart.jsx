import React from 'react';
import Styles from '../scss/cart.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import CartBlock from '../Components/cartBlock';
import { ClearProduct } from '../redux/slices/cartSlice';

const Cart = () => {
  const dispach = useDispatch();
  const { totalPrice } = useSelector((state) => state.Cart);
  const OnclickClear = () => {
    dispach(ClearProduct());
  };
  React.useEffect(() => {
    return window.scrollTo(0, 0);
  });
  const cartItem = useSelector((state) => state.Cart.items);
  return (
    <div className={Styles.container}>
      <div className={Styles.inside}>
        <div className={Styles.title}>
          <h1>Your Cart</h1>
        </div>
        {cartItem.map((item) => (
          <CartBlock key={item.id} {...item} />
        ))}
      </div>
      <div className={Styles.bottomBox}>
        <p>Price Total: ${totalPrice}</p>
        <span onClick={OnclickClear}>Clear Cart</span>
      </div>
    </div>
  );
};

export default Cart;
