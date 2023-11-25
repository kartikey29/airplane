import React from "react";

const NavBar = (props) => {
  return (
    <div
      className={` border-b-[1px] mb-2 border-[#eddddd] p-2 items-center flex w-11/12 mx-auto ${props.className}`}
    >
      <img
        src={require("../assets/logo.png")}
        alt="logo"
        className="h-[100px] ml-3"
      ></img>
      {props.children}
    </div>
  );
};
export default NavBar;
