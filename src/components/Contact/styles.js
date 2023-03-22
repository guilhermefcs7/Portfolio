import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;

  scroll-snap-align: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  gap: 50px;
`;

export const Presentation = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: #da4ea2;
  color: #fff;
  border: none;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

export const PresentationImage = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
