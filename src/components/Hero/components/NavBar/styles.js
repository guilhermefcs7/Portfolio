import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 10px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;

  list-style: none;
`;

export const ListItem = styled.li`
  cursor: pointer;
`;
