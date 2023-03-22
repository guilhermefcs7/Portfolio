import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    max-width: 500px;
  }
`;
export const Carousel = styled(motion.div)`
  cursor: grab;

  overflow: hidden;
`;

export const InnerCarousel = styled(motion.div)`
  display: flex;
`;

export const Images = styled(motion.div)`
  position: relative;

  min-width: 400px;
  min-height: 300px;
  padding: 14px;

  @media only screen and (max-width: 768px) {
    min-width: 150px;
    min-height: 100px;
    padding: 14px;
  }
`;

export const CardInfoContainer = styled.div`
  position: absolute;
  right: -10%;

  width: 400px;
  height: 300px;
  padding: 10px;

  opacity: 0;
  background: #1f3d4738;
  border: none;
  backdrop-filter: blur(5px);
  color: #fff;
  transition: 0.5s;

  &:hover {
    right: 0;

    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    width: 150px;
    height: 100px;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 700;
  }
`;

export const SubTitle = styled.p`
  text-transform: capitalize;
  font-size: 13px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Info = styled.p`
  font-size: 16px;
  line-height: 25px;
  margin: 40px 0;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Content = styled.img`
  width: 100%;
  height: 60%;

  border-radius: 15px;
  pointer-events: none;
`;
