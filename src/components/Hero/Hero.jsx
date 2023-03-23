import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import * as Cv from "../../services/cv";

import {
  Section,
  Container,
  Title,
  Presentation,
  PresentationInfo,
  Line,
  Subtitle,
  PresentationDescription,
  CvLoading,
  PresentationButtonContainer,
  CVButton,
  PresentationImage,
  Image,
} from "./styles";

function Hero() {
  const [cvFile, setCvFile] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCvs = async () => {
      setLoading(true);

      setCvFile(await Cv.getAll());

      setLoading(false);
    };

    getCvs();
  }, []);

  const handleDownloadCvPTBR = () => {
    const link = document.createElement("a");

    link.href = cvFile[1].url;
    link.download = cvFile[1].name;
    link.click();
  };

  const handleDownloadCvENUS = () => {
    const link = document.createElement("a");

    link.href = cvFile[0].url;
    link.download = cvFile[0].name;
    link.click();
  };

  return (
    <Section>
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
          {loading ? (
            <CvLoading>Carregando modelos de Currículo...</CvLoading>
          ) : (
            <PresentationButtonContainer>
              <CVButton onClick={handleDownloadCvPTBR}>
                Download CV PT-BR
              </CVButton>

              <CVButton onClick={handleDownloadCvENUS}>
                Download CV EN-US
              </CVButton>
            </PresentationButtonContainer>
          )}
        </Presentation>

        <PresentationImage>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />

            <Sphere args={[1, 100, 200]} scale={2.2}>
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
