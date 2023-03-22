import React from "react";

import { useState, useEffect, useRef } from "react";

import {
  Container,
  Carousel,
  InnerCarousel,
  Images,
  Content,
  CardInfoContainer,
  Title,
  SubTitle,
  Info,
} from "./styles";

import { data } from "./data";

function Slider() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <Container>
      <Carousel ref={carousel} whileTap={{ cursor: "grabbing" }}>
        <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
          {data.map((item) => (
            <Images key={item.id} onDoubleClick={() => handleClick(item.link)}>
              <CardInfoContainer>
                <Title>{item.title} </Title>
                <SubTitle>{item.subtitle} </SubTitle>
                <Info>{item.description} </Info>
              </CardInfoContainer>
              <Content src={item.image} alt={item.title} />
            </Images>
          ))}
        </InnerCarousel>
      </Carousel>
    </Container>
  );
}

export default Slider;
