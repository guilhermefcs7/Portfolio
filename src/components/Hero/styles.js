import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  flex-direction: column;

  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1400px;
  height: 100%;

  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Presentation = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 60px;
  }
`;

export const PresentationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Line = styled.img`
  height: 5px;
`;

export const Subtitle = styled.h2`
  color: #da4ea2;
`;

export const PresentationDescription = styled.p`
  font-size: 20px;
  color: #d3d3d3;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

export const PresentationButton = styled.button`
  width: 100px;
  padding: 10px;

  background-color: #da4ea2;
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const PresentationImage = styled.div`
  position: relative;

  flex: 3;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  margin: auto;
  width: 800px;
  height: 600px;

  object-fit: contain;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
