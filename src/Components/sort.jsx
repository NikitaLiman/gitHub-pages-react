import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setsort } from '../redux/slices/filterSlice.js';
import '../scss/sort.scss';
const Sort = () => {
  const dispatch = useDispatch();
  const sortList = useSelector((state) => state.filterSlice.sort);

  const [PopUp, setPopUp] = React.useState(false);
  const sortRef = React.useRef();

  const OnClickItem = (obj) => {
    dispatch(setsort(obj));
    setPopUp(false);
  };
  const list = [
    {
      name: 'Popularity',
      sortProperty: 'rating',
    },
    {
      name: 'Price',
      sortProperty: 'maxPrice',
    },
    {
      name: 'Title',
      sortProperty: 'title',
    },
  ];

  React.useEffect(() => {
    const HandleRemovePop = (event) => {
      if (!sortRef.current.contains(event.target)) {
        setPopUp();
      }
    };
    document.addEventListener('click', HandleRemovePop);
    return () => document.removeEventListener('click', HandleRemovePop);
  }, []);
  return (
    <div ref={sortRef} className="containerSort">
      <div className="sort__label">
        <p>Sort by:</p>
        <span className="spanOpen" onClick={() => setPopUp(!PopUp)}>
          {sortList.name}
        </span>
      </div>
      <div className="sort">
        {PopUp && (
          <div className="content__sort">
            <ul>
              {list.map((obj, i) => (
                <li
                  className={sortList.sortProperty === obj.sortProperty ? 'active' : ''}
                  onClick={() => OnClickItem(obj)}
                  key={i}>
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;
