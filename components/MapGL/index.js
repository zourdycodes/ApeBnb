import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";

export const MapComponent = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  // transform the search results data into the
  // { longitude: bla bla bla, latitude: bla bla bla }
  const coordinates = searchResults?.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // The Latitude and Longitude of the center of locations coordinates
  const centerCoords = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude: centerCoords.latitude,
    longitude: centerCoords.longitude,
    zoom: 10,
    width: "100%",
    height: "100%",
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/zourdycodes/cks5j870sd5l917pla4ceyol8"
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults?.map((result, index) => (
        <div key={index}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* POPUP */}
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              longitude={result.long}
              latitude={result.lat}
            >
              <div>{result.title}</div>
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
};
