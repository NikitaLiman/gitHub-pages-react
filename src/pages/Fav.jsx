import React, { useEffect } from 'react';
import Styles from '../scss/Fav.module.scss';
import { ClearAll } from '../redux/slices/FavSlice';
import { useSelector, useDispatch } from 'react-redux';
import Block from '../Components/Favblock.jsx';

const Fav = () => {
  const dispatch = useDispatch();
  const OnClickClear = () => {
    dispatch(ClearAll());
  };
  const product = useSelector((state) => state.FavSlices.items);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log('Redux State:', product);

  return (
    <div className={Styles.container}>
      <div className={Styles.contInside}>
        <h1>Your Favourites</h1>
      </div>
      <div className={Styles.content}>
        {product.map((item) => (
          <Block key={item.id} {...item} />
        ))}
      </div>
      <div className={Styles.ClearBox}>
        <button onClick={OnClickClear}>Clear</button>;
      </div>
    </div>
  );
};

export default Fav;
