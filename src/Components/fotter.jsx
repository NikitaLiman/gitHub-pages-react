import React from 'react';
import Styles from '../scss/fotter.module.scss';
import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';
import telegram from '../img/telegram.png';
import Logo from '../img/Remove-bg.ai_1725380721350.png';

const Fotter = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.conteinerFirst}>
        <div className={Styles.logo}>
          <img src={Logo} alt="" />
          <h1>Katala</h1>
        </div>
        <div className={Styles.List}>
          <ul>
            <li className={Styles.active}>About Us</li>
            <li>Contact Us</li>
            <li>+48 790 263 681</li>
            <li>486 Fawn Lane Brooklyn, NY 11228</li>
            <li>katalaShop024@gmail.com</li>
          </ul>
        </div>
        <div className={Styles.Icons}>
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
          <img src={telegram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Fotter;
