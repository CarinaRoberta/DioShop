import React from "react";
import { ContainerButton } from "./style";

const Button: React.FC = ({ children }) => {
  return <ContainerButton>{children}</ContainerButton>;
};

export default Button;
