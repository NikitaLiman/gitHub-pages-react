import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MoreInfo from '../Components/MoreInfo.jsx';
import Styles from '../scss/More.module.scss';

const More = () => {
  const cartItems = useSelector((state) => state.MoreSlice.items);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        {cartItems.map((item) => (
          <MoreInfo key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default More;
