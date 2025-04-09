// PropertyMap.tsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 13.0827,
  lng: 80.2707,
};

type Props = {
  properties: {
    id: string;
    title: string;
    lat: number;
    lng: number;
  }[];
};

const PropertyMap: React.FC<Props> = ({ properties }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBliJG4P1NbUzbjQZ6nmCxjsNyBSli_34Az">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={7}>
        {properties.map((property) => (
          <Marker key={property.id} position={{ lat: property.lat, lng: property.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default PropertyMap;
