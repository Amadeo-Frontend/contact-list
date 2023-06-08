import React from "react";
import { StyledNavbar, StyledNavbarBrand } from "./styles";

const Navbar = () => {
  return (
    <StyledNavbar className="container-fluid">
      <div>
        <StyledNavbarBrand to="/">Lista de Contatos</StyledNavbarBrand>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
