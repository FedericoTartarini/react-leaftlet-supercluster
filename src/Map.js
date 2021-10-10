import React from "react";
import { useQuery } from "react-query";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import ShowCrimes from "./ShowCrimes";

function Map() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <MapContainer center={[52.6376, -1.135171]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <ShowCrimes data={data} />
    </MapContainer>
  );
}

export default Map;
