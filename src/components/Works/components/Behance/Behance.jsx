import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Behance as BehanceWeb } from "../3d/behance/Behance";

import { Card } from "../Generic/Card";

function Behance() {
  const goToBehancePage = () => {
    window.open("https://www.behance.net/guilhermefalco1", "_blank");
  };

  const description =
    "Use of Behance as a way to propagate an important designer side for applications.";

  return (
    <>
      <Canvas onDoubleClick={goToBehancePage} style={{ cursor: "pointer" }}>
        <Stage environment="city" intensity={0.6}>
          <BehanceWeb />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>

      <Card description={description} />
    </>
  );
}

export default Behance;
