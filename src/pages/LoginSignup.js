import React from "react";
import Login from "../components/Login";

const LoginSignup = () => {
  return (
    <div className=" min-h-screen  bg-black flex items-center justify-center ">
      <div className="w-11/12 flex justify-evenly items-center  mx-auto">
        <Login />
        <img
          src={require("../assets/airplane.png")}
          alt="airplane"
          className="h-[650px] w-[600px] rounded-md"
        ></img>
      </div>
    </div>
  );
};

export default LoginSignup;
