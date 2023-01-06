import React, { useState } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import {API_KEY} from './config.js';

const containerStyle = {
  width: "100%",
  height: "420px",
};

const position = {
  lat: -3.745,
  lng: -38.523,
};



const Direction = ({origin, destination}) => {
  const [DirectionResponse, setDirectionResponse] = useState(null);
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={12}>
        {/* Child components, such as markers, info windows, etc. */}
        {
          origin !== "" && destination !== "" && 
        <DirectionsService
                  // required
                  options={{
                    destination: destination,
                    origin: origin,
                    travelMode: 'DRIVING'
                  }}
                  // required
                  callback={res => {
                    if(res !== null){
                      setDirectionResponse(res);
                    }
                  }}
                />
              }
                {
              DirectionResponse && <DirectionsRenderer
                  // required
                  options={{
                    directions: DirectionResponse
                  }}
                />
                }
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Direction);