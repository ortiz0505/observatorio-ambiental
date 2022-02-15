import React from 'react';
import { useMapEvents, Marker, Popup} from 'react-leaflet';

const AddMarketToClick = ({position, setPosition}) => {

    const map = useMapEvents({
      click(event) {
        const { lat, lng } = event.latlng;
        setPosition({
          latitude: lat,
          longitude: lng,
        });
      },
    });
  
    return (
      position.latitude !== 0 ? (
        <Marker position={[position.latitude, position.longitude]}>
          <Popup>
            {position.latitude} / {position.longitude}
          </Popup>
        </Marker>
      ) : null
    )
};

export default AddMarketToClick;
