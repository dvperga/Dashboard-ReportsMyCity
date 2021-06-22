import * as React from "react";
import { useGoogleMaps } from "react-hook-google-maps";

const Map = () => {
  const report = JSON.parse(localStorage.getItem("report"));
  const coords = {
    lat: Number(report.coordenates.latitude),
    lng: Number(report.coordenates.longitude),
  };

  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyBEuDt_qDnSmmFuTN0i2MX3OCcx9Ps9Blo",
    // NOTE: even if you change options later
    {
      center: {
        lat: Number(report.coordenates.latitude),
        lng: Number(report.coordenates.longitude),
      },
      zoom: 16,
      streetViewControl: false,
    }
  );
  if (map) {
    // execute when map object is ready
    new google.maps.Marker({ position: coords, map });
  }

  console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
  return <div ref={ref} style={{ width: '100%', height: 200 }} />;
};

export default Map;
