import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { NavBar } from "./components";

import {
  Section,
  Container,
  Title,
  Presentation,
  PresentationInfo,
  Line,
  Subtitle,
  PresentationDescription,
  PresentationButton,
  PresentationImage,
  Image,
} from "./styles";

function Hero() {
  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/public/pdf/Currículo.pdf";
    link.download = "Currículo.pdf";
    link.click();
  };

  return (
    <Section>
      <NavBar />
      <Container>
        <Presentation>
          <Title>Think. Plan. Execute</Title>
          <PresentationInfo>
            <Line src="/img/line.png" />
            <Subtitle>About Me</Subtitle>
          </PresentationInfo>
          <PresentationDescription>
            Software Developer focused on Front-End applications. Enthusiastic
            about coding and appreciative of the new arts in technology. With
            solid experience in web development using React.js and typescript,
            in addition to creating tests and solidify software with Clean Code
            and Clean Architecture
          </PresentationDescription>
          <PresentationButton onClick={handleDownloadCv}>
            Download CV
          </PresentationButton>
        </Presentation>

        <PresentationImage>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />

            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#05294e"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Image src="/img/moon.png" />
        </PresentationImage>
      </Container>
    </Section>
  );
}

export default Hero;
