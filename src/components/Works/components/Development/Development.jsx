import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Development as Github } from "../3d/development/Development";

import { Card } from "../Generic/Card";

function Development() {
  const goToDevelopmentPage = () => {
    window.open("https://github.com/guilhermefcs7", "_blank");
  };

  const description = `On my GitHub you can find a variety of projects in different programming languages, most of which are focused on  JavaScript, and TypeScript. Some of my most notable projects include a Netflix Clone adapted on web and mobile enviroment, FullStack softwares Using Node and MySql, Web apps to host files in the cloud using firebase.`;
  return (
    <>
      <Canvas onDoubleClick={goToDevelopmentPage} style={{ cursor: "pointer" }}>
        <Stage environment="city" intensity={0.6}>
          <Github />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Card description={description} />
    </>
  );
}

export default Development;
