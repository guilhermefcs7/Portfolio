import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const brazilGeo =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-110m.json";
const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600,
      }}
      style={{ width: "100%", height: "100%" }}>
      <Geographies
        geography="./features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
