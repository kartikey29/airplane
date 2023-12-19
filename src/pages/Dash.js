import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CusMap from "../components/CusMap";

const Dash = () => {
  const [airline, setAirLine] = useState("All");
  const [imageType, setImageType] = useState("Color");

  let airlines = [
    "All",
    "Delhi",
    "United",
    "American",
    "Alaska Airlines",
    "Frontier",
    "Southwest Airlines",
    "Spirit Airlines",
    "Hawain Airlines",
    "British Airlines",
  ];

  let imageTypes = ["Color", "B&W", " RGB"];

  return (
    <>
      <div className="min-h-screen">
        <NavBar className="justify-between">
          <div className="flex ">
            <div className="flex  gap-2 items-center">
              <span className="text-white">Filters :</span>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Airlines
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={airline}
                  label={"Airlines"}
                  onChange={(e) => {
                    setAirLine(e.target.value);
                  }}
                >
                  {airlines.map((str) => {
                    return <MenuItem value={str}>{str}</MenuItem>;
                  })}
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Image Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  label={"Image Type"}
                  value={imageType}
                  onChange={(e) => {
                    setImageType(e.target.value);
                  }}
                >
                  {imageTypes.map((str) => {
                    return <MenuItem value={str}>{str}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <DatePicker
                label="start date"
                minDate={dayjs(new Date())}
                slotProps={{ textField: { size: "small" } }}
              />
              <DatePicker
                label="end date"
                minDate={dayjs(new Date())}
                slotProps={{ textField: { size: "small" } }}
              />
            </div>
          </div>
        </NavBar>
        <div className="flex  justify-center gap-10 w-11/12 mx-auto mt-[25px]">
          <div className="w-[30%]">
            <AddressForm />
          </div>
          <div className="w-[70%]">
            <CusMap></CusMap>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dash;
