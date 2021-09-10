import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to="paintings">Paintings</Link>
      <Link to="addPainting">Add Painting</Link>
    </HeaderContainer>
  );
};

export default Header;
