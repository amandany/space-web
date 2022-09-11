import React from "react";
import "./Footer.scss";
import appleStore from "../../img/appleStore.svg";
import googlePlay from "../../img/googlePlay.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="info">
        <p>
          © 2001–2022 ООО <span>«СпейсВэб»</span>
        </p>
        <p>Все права защищены.</p>
        <p>
          Лицензия <span>№163230</span>
        </p>
      </div>
      <div className="download">
        <p>Скачать приложение</p>
        <div className="link-img">
          <img src={appleStore} alt="appleStore" />
          <img src={googlePlay} alt="googlePlay" />
        </div>
      </div>
      <div className="telephone">
        <a href="tel: +78123341222">
          +7 (812) 334-12-22 <span>(в Санкт-Петербурге)</span>
        </a>
        <a href="tel: +74956631612">
          +7 (495) 663-16-12 <span>(в Москве)</span>
        </a>
        <a href="tel: +78001001615">
          +7 (800) 100-16-15 <span>(бесплатно по России)</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
