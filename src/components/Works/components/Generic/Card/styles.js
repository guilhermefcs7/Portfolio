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
    display: none;
  }
`;

export const DescriptionContentWarning = styled.p`
  font-size: 15px;
  line-height: 25px;
  font-weight: 600;
  text-align: center;
`;

export const DescriptionContent = styled.p`
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
`;
