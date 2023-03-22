import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { SocialMedia as Linkedin } from "../3d/socialMedia/SocialMedia";

import { Card } from "../Generic/Card";

function SocialMedia() {
  const goToLinkedinPage = () => {
    window.open(
      "https://www.linkedin.com/in/guilherme-falc%C3%A3o-580718208/",
      "_blank"
    );
  };

  const description =
    "Learn more about my work through my linkedin profile, where I show my achievements and qualifications.";

  return (
    <>
      <Canvas onDoubleClick={goToLinkedinPage} style={{ cursor: "pointer" }}>
        <Stage environment="city" intensity={0.6}>
          <Linkedin />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>

      <Card description={description} />
    </>
  );
}

export default SocialMedia;
