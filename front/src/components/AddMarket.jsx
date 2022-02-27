import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const AddMarket = (props) => {
  const { position } = props;
  const { setPosition } = props;
  // eslint-disable-next-line no-unused-vars
  const map = useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      setPosition({
        latitude: lat,
        longitude: lng,
      });
    },
  });
  return position.latitude !== 0 ? (
    <Marker position={[position.latitude, position.longitude]}>
      <Popup>
        Lat:{position.latitude} / Long:{position.longitude}
      </Popup>
    </Marker>
  ) : null;
};

export default AddMarket;
