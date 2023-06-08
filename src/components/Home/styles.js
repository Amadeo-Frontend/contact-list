import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  margin-top: 50px;
`;

// eslint-disable-next-line no-undef
export const StyledAddButton = styled(Link)`
  margin-bottom: 20px;
  color: #5aeec6;
  background-color: black;
  border: 3px solid rgb(0, 0, 0);
  padding: 5px 10px;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  border-radius: 10px;
  -webkit-transition: 1.5s;
  transition: 1.5s;

  &:hover {
    box-shadow: 0px 0px 6px 8px rgba(58, 56, 56, 0.4);
    -webkit-box-shadow: 0px 0px 6px 8px rgba(58, 56, 56, 0.4);
    -moz-box-shadow: 0px 0px 6px 8px rgba(58, 56, 56, 0.4);
    background-color: rgba(5, 5, 5, 1);
    color: green;
    border: 2px solid green;
    transform: scale(1.05, 1.05);
  }
`;

export const StyledTable = styled.table`
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 900px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-collapse: collapse;
  box-shadow: 0px 6px 20px -1px rgba(58, 56, 56, 0.66);
  -webkit-box-shadow: 0px 6px 20px -1px rgba(58, 56, 56, 0.66);
  -moz-box-shadow: 0px 6px 20px -1px rgba(58, 56, 56, 0.66);

  @media (max-width: 769px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyledTableHeader = styled.thead`
  background-color: black;
  color: #fff;
  text-align: center;
`;
export const StyledTabletr = styled.tr`
  background-color: black;
`;
export const StyledTableData = styled.td`
  padding: 10px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ccc;
  font-size: 14px;
`;

// eslint-disable-next-line no-undef
export const StyledEditButton = styled(Link)`
  margin-right: 5px;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 10px;

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
    color: #fff;
    text-decoration: none;
  }
`;

export const StyledDeleteButton = styled.button`
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 10px;

  &:hover {
    background-color: #c82333;
    border-color: #c82333;
    color: #fff;
    text-decoration: none;
  }
`;
