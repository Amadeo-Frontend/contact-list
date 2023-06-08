import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  margin-top: 50px;
`;

export const StyledHeading = styled.h1`
  text-align: center;
  font-weight: bold;
  font-family: "Comfortaa", cursive;
`;

export const StyledForm = styled.form`
  text-align: center;
`;

export const StyledFormGroup = styled.div`
  margin-bottom: 20px;
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

export const StyledSubmitButton = styled.input`
  background-color: #343a40;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #23272b;
  }
`;

export const StyledCancelButton = styled(Link)`
  background-color: #dc3545;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background-color: #c82333;
  }
`;
