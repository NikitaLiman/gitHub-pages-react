import React from 'react';
import '../scss/sidebar.scss';
import { Link } from 'react-router-dom';

const SideBar = ({ value, OnClickOnSideBar }) => {
  const List = ['All', 'Phones', 'Laptops', 'Monitors', 'Mouse', 'KeyBoard'];
  return (
    <div className="containerSide">
      <div className="content">
        <h1>Categories</h1>
        <ul>
          {List.map((SideBarName, i) => {
            return (
              <li
                key={i}
                onClick={() => OnClickOnSideBar(i)}
                className={value === i ? 'active' : ''}>
                {SideBarName}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="HelpInstructions">
        <h2>Help</h2>
        <Link to="/terms-and-conditions">
          <h3>Terms & Conditions</h3>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
