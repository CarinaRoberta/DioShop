import React from "react";
import styled from "styled-components";
import { containerGlobal } from "../../styles/global";

const ContainerGlobal = styled.div`
  box-sizing: border-box;
  max-width: ${containerGlobal(1424)};
  width: 100%;
  margin-inline: auto;
`;

const GlobalContainer: React.FC = ({ children }) => {
  return <ContainerGlobal>{children}</ContainerGlobal>;
};

export default GlobalContainer;
