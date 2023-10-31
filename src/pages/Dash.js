import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

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
    <div>
      <div className="h-[70px] border-b-4 border-[#eddddd] mb-9 pb-2 flex items-end">
        <div className="flex justify-end w-11/12 mx-auto ">
          <div className="flex  gap-2 items-center">
            <span>Filters :</span>
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
              label="Select date"
              minDate={dayjs(new Date())}
              slotProps={{ textField: { size: "small" } }}
            />
          </div>
        </div>
      </div>
      <div className="flex  justify-center gap-10 w-11/12 mx-auto">
        <div className="w-[30%]">
          <AddressForm />
        </div>
        <div className="w-[70%]">
          <img
            src={require("../assets/map.png")}
            alt="map"
            className="h-[550px]"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Dash;
