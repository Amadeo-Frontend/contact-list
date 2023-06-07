import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledNavbar = styled.nav`
  background-color: black;
  padding: 10px 0;
  margin: 0 auto;
`;

// eslint-disable-next-line no-undef
export const StyledNavbarBrand = styled(Link)`
  color: #fff;
  font-size: 20px;
  margin-left: 20px;
  text-decoration: none;
  font-family: "Tilt Prism", cursive;

  &:hover {
    text-decoration: none;
    cursor: none;
  }
`;

export const StyledNavbarContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
