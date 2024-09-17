import React from 'react';
import Styles from '../scss/search.module.scss';
import SearchImg from '../img/search.png';
import Clear from '../img/3669378_clear_ic_icon.png';
import { searchContext } from '../App.js';

const Search = () => {
  const { searchValue, setsearchValue } = React.useContext(searchContext);
  return (
    <div className={Styles.container}>
      {searchValue && (
        <img onClick={() => setsearchValue('')} className={Styles.clearIcon} src={Clear} alt="" />
      )}

      <input
        value={searchValue}
        onChange={(event) => setsearchValue(event.target.value)}
        placeholder="Search..."
      />
      <img className={Styles.searchImg} src={SearchImg} alt="" />
    </div>
  );
};

export default Search;
