import { TextField, Button } from "@mui/material";
import React from "react";

const AddressForm = () => {
  return (
    <div className="flex flex-col gap-2 p-3 border-[1px] rounded-md ">
      <h1 className="text-xl font-medium py-3 pb-0 text-white">
        Search location
      </h1>
      <TextField variant="filled" label="Address line 1"></TextField>
      <div className="flex gap-2">
        <TextField
          variant="filled"
          label="Address line 2"
          className="w-[200px]"
        ></TextField>
        <TextField
          variant="filled"
          label="City"
          className="w-[200px]"
        ></TextField>
      </div>

      <div className="flex gap-2">
        <TextField
          variant="filled"
          label="State"
          className="w-[200px]"
        ></TextField>
        <TextField
          variant="filled"
          label="Country"
          className="w-[200px]"
        ></TextField>
      </div>
      <TextField variant="filled" label="Pincode"></TextField>

      <Button
        variant="contained"
        sx={{
          marginTop: "5px",
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddressForm;
