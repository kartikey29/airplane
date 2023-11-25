import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const AddressForm = () => {
  const [addLine1, setaddLine1] = useState("");
  const [addLine2, setaddLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");

  const handleChange = (e) => {
    let val = e.target.value;
    let name = e.target.name;

    switch (name) {
      case "addLine1":
        setaddLine1(val);
        break;
      case "addLine2":
        setaddLine2(val);
        break;
      case "city":
        setCity(val);
        break;
      case "state":
        setState(val);
        break;
      case "country":
        setCountry(val);
        break;
      case "pincode":
        setPincode(val);
        break;
      default:
        break;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const address = addLine1 + "+" + city + "+" + country + "+" + pincode;

    console.log(address);
    const res1 = await axios.get(
      `   https://nominatim.openstreetmap.org/search?<params>
      `
    );
    console.log(res1);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col gap-2 p-3 border-[1px] rounded-md ">
        <h1 className="text-xl font-medium py-3 pb-0 text-white">
          Search location
        </h1>
        <TextField
          variant="filled"
          label="Address line 1"
          name="addLine1"
          onChange={handleChange}
          required={true}
          value={addLine1}
        ></TextField>
        <div className="flex gap-2">
          <TextField
            variant="filled"
            name="addLine2"
            value={addLine2}
            onChange={handleChange}
            label="Address line 2"
            className="w-[200px]"
          ></TextField>
          <TextField
            variant="filled"
            required={true}
            label="City"
            name="city"
            onChange={handleChange}
            value={city}
            className="w-[200px]"
          ></TextField>
        </div>

        <div className="flex gap-2">
          <TextField
            variant="filled"
            label="State"
            onChange={handleChange}
            name="state"
            required={true}
            value={state}
            className="w-[200px]"
          ></TextField>
          <TextField
            variant="filled"
            onChange={handleChange}
            label="Country"
            name="country"
            required={true}
            value={country}
            className="w-[200px]"
          ></TextField>
        </div>
        <TextField
          variant="filled"
          onChange={handleChange}
          label="Pincode"
          name="pincode"
          required={true}
          value={pincode}
        ></TextField>

        <Button
          variant="contained"
          sx={{
            marginTop: "5px",
          }}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddressForm;
