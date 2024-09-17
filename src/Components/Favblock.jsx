import React from 'react';
import Styles from '../scss/Fav.module.scss';
import Delet from '../img/3669378_clear_ic_icon.png';
import { RemoveItem } from '../redux/slices/FavSlice';
import { useDispatch } from 'react-redux';

const Favblock = ({ id, imgUrl, title, Model }) => {
  const dispach = useDispatch();
  const RemoveitemChange = () => {
    dispach(RemoveItem(id));
  };
  return (
    <div className={Styles.Cont}>
      <div className={Styles.cont__twoBlocks}>
        <div className={Styles.ImgBlock}>
          <img src={imgUrl} alt="" />
        </div>
        <div className={Styles.block}>
          <h1>
            {title}: {Model.name}
          </h1>
        </div>
      </div>
      <div className={Styles.Deletefav}>
        <button onClick={RemoveitemChange}>
          <img src={Delet} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Favblock;
