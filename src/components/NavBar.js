import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const NavBar = (props) => {
  let login = useSelector((state) => state.loginState);
  const dispatch = useDispatch();

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
      {login && (
        <Button
          variant="outlined"
          onClick={() => {
            dispatch({ type: "LOGOUT" });
          }}
        >
          Logout
        </Button>
      )}
    </div>
  );
};
export default NavBar;
