import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

import { OctahedronShape } from "./components";

import { Containter } from "./styles";

function Geometry() {
  return (
    <Containter>
      <Canvas camera={{ fov: 20, position: [10, 7, 5] }}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <OctahedronShape />
      </Canvas>
    </Containter>
  );
}

export default Geometry;
