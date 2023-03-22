import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

export const PresentationImage = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
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
