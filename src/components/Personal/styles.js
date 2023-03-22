import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  scroll-snap-align: center;
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
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
