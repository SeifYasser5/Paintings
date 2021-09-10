import React from "react";
import { ButtonBase } from "./styles";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <ButtonBase onClick={onClick}>{text}</ButtonBase>;
};

export default Button;
