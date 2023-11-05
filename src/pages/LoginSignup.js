import React from "react";
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const LoginSignup = () => {
  return (
    <>
      <div className=" min-h-screen ">
        <NavBar className="justify-between">
          <div className="flex gap-8  text-white mr-4 underline">
            <p>About us</p> <p>Roadmap</p> <p>Signup</p>
          </div>
        </NavBar>
        <div className="w-11/12 flex justify-evenly items-center  mx-auto">
          <Login />
          <img
            src={require("../assets/airplane.png")}
            alt="airplane"
            className="h-[600px] w-[550px] rounded-md"
          ></img>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default LoginSignup;
