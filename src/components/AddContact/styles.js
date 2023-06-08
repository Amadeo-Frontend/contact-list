import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: 50px;
`;

export const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  font-family: "Comfortaa", cursive;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 1em;
  background-color: #ccd;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
  transition: 300ms ease-in-out;
  font-size: 16px;

  &:focus {
    background-color: white;
    transform: scale(1.05);
    box-shadow: 13px 13px 100px #969696, -13px -13px 100px #ffffff;
  }
`;
export const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const StyledSubmitButton = styled.input`
  width: 200px;
  padding: 10px;
  background-color: #343a40;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
