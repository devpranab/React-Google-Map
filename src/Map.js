import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {API_KEY} from './config.js';

const containerStyle = {
  width: "100%",
  height: "420px",
};

const position = {
  lat: -3.745,
  lng: -38.523,
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={12}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker onLoad={onLoad} position={position}/>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);