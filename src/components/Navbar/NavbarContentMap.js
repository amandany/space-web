import React from "react";

const NavbarContentMap = ({ content }) => {
  const ChildContent = content.content.map((child, index) => {
    return (
      <div key={index} className="nav-item nav-item-child">
        <img src={`${process.env.PUBLIC_URL}/img/${child.img_name}`} alt="img" />
        <p className="text">{child.title}</p>
      </div>
    );
  });

  return (
    <>
      <div className="nav-item">
        <img src={`${process.env.PUBLIC_URL}/img/${content.img_name}`} alt="img" />
        <p className="text">{content.title}</p>
      </div>
      {ChildContent}
    </>
  );
};

export default NavbarContentMap;
