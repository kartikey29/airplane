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
        <h1 className="text-5xl pb-6 font-semibold">Login to your account</h1>
        <TextField
          label="Email"
          variant="filled"
          className="rounded-lg"
          size="small"
          sx={{ backgroundColor: "white", color: "black" }}
        ></TextField>

        <TextField
          label="Password"
          variant="filled"
          size="small"
          className="rounded-lg"
          sx={{
            backgroundColor: "white",
            color: "black",
          }}
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
    </div>
  );
};

export default Login;
