import React from 'react';
import Styles from '../scss/ContentInv.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../redux/slices/cartSlice';
import { setItems } from '../redux/slices/MoreSlice';
import { Link } from 'react-router-dom';

const ContentInv = ({ id, title, model, memory, imgUrl, prices, text }) => {
  const Dispatch = useDispatch();
  const cartItem = useSelector((state) => state.Cart.items.find((obj) => obj.id === id));
  const addedItem = cartItem ? cartItem.count : 0;
  const [activeMem, setActiveMem] = React.useState(0);
  const [activeModel, setActiveModel] = React.useState(0);

  const OnClickAdd = () => {
    const item = {
      id,
      title,
      prices: currentPrices[activeMem],
      imgUrl: currentModel.imgUrl,
      Model: model[activeModel],
      Mem: currentTypes[activeMem],
    };
    Dispatch(addProduct([item]));
    console.log(item);
  };
  const OnClickAdditem = () => {
    const item = {
      id,
      title,
      text: currentModel.text,
      prices: currentPrices[activeMem],
      imgUrl: currentModel.imgUrl,
      Model: model[activeModel],
      Mem: currentTypes[activeMem],
    };
    Dispatch(setItems([item]));
  };

  const onClickMem = (i) => {
    setActiveMem(i);
  };

  const onClickMdl = (i) => {
    setActiveModel(i);
  };

  React.useEffect(() => {
    setActiveMem(0);
  }, [activeModel]);

  const currentModel = model[activeModel];
  const currentPrices = currentModel ? currentModel.prices : [];
  const currentPrice = currentPrices[activeMem] || 'N/A';
  const currentTypes = currentModel ? currentModel.types : [];

  return (
    <div className={Styles.Container}>
      <div className={Styles.containerContent}>
        <div className={Styles.ImageBox}>
          <div className={Styles.containerIB}>
            <img src={currentModel?.imgUrl || imgUrl} alt="" />
          </div>
        </div>
        <div className={Styles.ContainerSet}>
          <div className={Styles.Title}>{title}</div>
          <div className={Styles.ContainerChoose}>
            <div className={Styles.Model}>
              <ul>
                {model.map((modelItem, index) => (
                  <li
                    onClick={() => onClickMdl(index)}
                    className={activeModel === index ? Styles.active : ''}
                    key={modelItem.name}>
                    {modelItem.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={Styles.memory}>
              <ul>
                {currentTypes.map((mem, index) => (
                  <li
                    onClick={() => onClickMem(index)}
                    className={activeMem === index ? Styles.active : ''}
                    key={mem}>
                    {mem}
                  </li>
                ))}
              </ul>
            </div>
            <div className={Styles.boxPrices}>
              <div className={Styles.Price}>Price:{currentPrice}</div>
              <div className={Styles.Button}>
                <Link to={'More'}>
                  <button onClick={OnClickAdditem}>More</button>
                </Link>

                <button onClick={OnClickAdd}>
                  Add
                  {addedItem > 0 && <i>{addedItem}</i>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentInv;
