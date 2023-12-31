import {
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";

import { VisibilityOff, Visibility } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch({ type: "LOGIN_SUCCESS" });
  };
  const handleClickShowPassword = () => {};

  return (
    <div className="text-white w-[30%] p-3">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl pb-2 font-semibold">
          Login to Earth Observation
        </h1>
        <TextField
          label="Email"
          variant="filled"
          className="rounded-lg"
          size="small"
        ></TextField>

        <TextField
          label="Password"
          variant="filled"
          size="small"
          className="rounded-lg"
          shape="rounded"
        ></TextField>

        <Button
          sx={{
            width: "100px",
            backgroundColor: "white",
            marginTop: "10px",
            color: "black",
            "&:hover": { backgroundColor: "#ebe8e8" },
          }}
          variant="contained"
          onClick={submitHandler}
        >
          Login
        </Button>
      </div>
      <p className="mt-1 ml-2">
        Not a Space Intel customer yet? <u>Sign up</u>
      </p>
    </div>
  );
};

export default Login;
