import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};
const center = {
  lat: 31.968599,
  lng: -99.901813,
};
const CusMap = () => {
  const [data, setData] = useState({});

  console.log(data);

  useEffect(() => {
    axios
      .get("http://localhost:5000/start-event-processing")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));

    const intervalId = setInterval(() => {
      axios
        .get("http://localhost:5000/get-data")
        .then((response) => setData(response.data.data))
        .catch((error) => console.error(error));
    }, 1000);

    return () => {
      clearInterval(intervalId);
      // Stop event processing when the component unmounts
      axios
        .get("http://localhost:5000/stop-event-processing")
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
    };
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDG8ym6yFRrHI5Ed_2f1pabFclQebctUQ0",
  });

  console.log(isLoaded);

  return (
    <div>
      {isLoaded ? (
        <GoogleMap zoom={5} mapContainerStyle={containerStyle} center={center}>
          {Object.keys(data ?? {}).map((key) => {
            if (key !== "full_count" && key !== "version") {
              return (
                <Marker position={{ lat: data[key][1], lng: data[key][2] }} />
              );
            }
          })}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CusMap;

//AIzaSyDG8ym6yFRrHI5Ed_2f1pabFclQebctUQ0
