import React from "react";

import {
  Container,
  Title,
  PresentationInfo,
  Line,
  Subtitle,
  PresentationDescription,
} from "../Hero/styles";

import { Geometry } from "../Geometry";

import { Section, Presentation, PresentationImage } from "./styles";
import { SliderComponent } from "./components";

function Personal() {
  return (
    <Section>
      <Container>
        <PresentationImage>
          <Geometry />
        </PresentationImage>

        <Presentation>
          <Title>Think outside the box</Title>
          <PresentationInfo>
            <Line src="./img/line.png" />
            <Subtitle>Development</Subtitle>
          </PresentationInfo>
          <PresentationDescription>
            Here are the projects that I consider to be the most notable that I
            have developed. (Double click to open it)
          </PresentationDescription>

          <SliderComponent />
        </Presentation>
      </Container>
    </Section>
  );
}

export default Personal;
