import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #fff;
  background: url("./img/bg.jpeg");

  &::-webkit-scrollbar {
    display: none;
  }
`;
