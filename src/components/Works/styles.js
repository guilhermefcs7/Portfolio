import styled from "styled-components";

export const Section = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  height: 100vh;

  scroll-snap-align: center;
  color: #000;
  font-size: 14px;
  font-weight: 300;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1400px;

  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Presentation = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
  gap: 20px;
`;

export const ListItem = styled.li`
  position: relative;

  font-size: 90px;
  font-weight: 700;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  white-space: nowrap;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: #fff;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;

    width: 0;

    color: #7fdbff;
    overflow: hidden;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

export const PresentationImage = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    padding-top: 60px;
  }
`;
