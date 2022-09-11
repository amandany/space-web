import React, { useState } from "react";
import "./Navbar.scss";
import logo_sweb from "../../img/logo_sweb.png";
import icon_menu from "../../img/icon_menu.svg";
import NavbarContent from "./navbar.content.json";
import bell from "../../img/bell.svg";
import { Outlet } from "react-router-dom";
import NavbarContentMap from "./NavbarContentMap";
import Footer from "../Footer/Footer";
import mobileiconnavbar from "../../img/mobile-icon-navbar.svg";
const Navbar = () => {
  const [FullScreenNav, setFullScreenNav] = useState(false);

  const ContentMap = NavbarContent.map((el, i) => {
    return <NavbarContentMap key={i} content={el} />;
  });

  return (
    <div className="app">
      <div className="wrapper">
        <div className={`navbar ${FullScreenNav ? "" : "navbar-small"}`}>
          <div className="navbar-header">
            <img className="logo" src={logo_sweb} alt="space web" />
            <img
            className="nav-navigator"
              src={icon_menu}
              alt="---"
              onClick={() => setFullScreenNav((prev) => !prev)}
            />
          </div>
          <div className="navbar-content">{ContentMap}</div>
        </div>

        <main className="content">
          <header>
            <div className="mobile-icon-nav">
              <img
                src={mobileiconnavbar}
                alt="---"
                onClick={() => setFullScreenNav((prev) => !prev)}
              />
            </div>
            <div className="right">
              <p>3467 ₽</p>
              <div className="bell-wrapper">
                <img className="bell" src={bell} alt="bell" />
                <p>username</p>
              </div>
              <p>Выйти</p>
            </div>
          </header>

          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Navbar;
