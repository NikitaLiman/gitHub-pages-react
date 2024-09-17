import React from 'react';
import Styles from '../../scss/NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFoundBlock = () => {
  return (
    <div className={Styles.container}>
      <h1>
        <span>😞</span>
        <br />
        Not found page :(
      </h1>
      <div className={Styles.back}>
        <p>Return to:</p>
        <Link to="">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundBlock;
