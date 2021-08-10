import ReactMapGL from "react-map-gl";
import { useState } from "react";

export const MapComponent = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width: "100%",
    height: "100%",
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/zourdycodes/cks5j870sd5l917pla4ceyol8"
      mapboxApiAccessToken={process.env.mapbox_key}
    ></ReactMapGL>
  );
};
