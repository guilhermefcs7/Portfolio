import styled from "styled-components";

export const Description = styled.div`
  position: absolute;
  top: 100px;
  right: 80px;

  width: 200px;

  padding: 20px;

  background-color: #fff;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    margin: auto;
  }
`;
