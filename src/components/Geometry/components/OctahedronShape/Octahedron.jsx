import React from "react";

import { PerspectiveCamera, RenderTexture } from "@react-three/drei";

function OctahedronShape() {
  return (
    <mesh>
      <octahedronBufferGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#85144b"]} />
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default OctahedronShape;
