import React from 'react';
import Search from './search';
import Logo from '../img/Remove-bg.ai_1725380721350.png';
import Bag from '../img/shopping-bag.png';
import Heart from '../img/heart.png';
import { Link } from 'react-router-dom';
import '../scss/header.scss';
import { searchContext } from '../App.js';
import { useSelector } from 'react-redux';

const Header = () => {
  const favItems = useSelector((state) => state.FavSlices.items);
  const Favoriteitems = favItems.some((item) => item.isFavorite);
  const { items } = useSelector((state) => state.Cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const { searchValue, setsearchValue } = React.useContext(searchContext);
  return (
    <div className="contHeader">
      <div className="container__contHeader">
        <div className="logo">
          <Link to="">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="MiniCategories">
          <Search searchValue={searchValue} setsearchValue={setsearchValue} />
          <div className="bagXFav">
            <div className="blockBox">
              <Link to="Cart">
                <img src={Bag} alt="" />
                <div className="container__Cart">
                  <span>{totalCount}</span>
                </div>
              </Link>
            </div>
            <Link to="Fav">
              <div
                className="blockBox1"
                style={{ backgroundColor: Favoriteitems ? 'rgb(234, 112, 112)' : 'white' }}>
                <img src={Heart} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
