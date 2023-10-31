import { TextField, Button } from "@mui/material";
import React from "react";

const AddressForm = () => {
  return (
    <div className="flex flex-col gap-2 p-3 border-2 rounded-md shadow-lg">
      <h1 className="text-xl font-medium py-3 pb-0">Search location</h1>
      <TextField variant="filled" label="Address line 1"></TextField>
      <TextField variant="filled" label="Address line 2"></TextField>

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
          backgroundColor: "#ebe8e8",
          marginTop: "5px",
          color: "#545454",
          "&:hover": { backgroundColor: "black", color: "white" },
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddressForm;
