import styled from "styled-components";
import { px2rem } from "../../styles/global";

const ContainerButton = styled.button`
  width: 100%;
  height: ${px2rem(34)};
  border-radius: 8px;
  border: none;
  background-color: #2b4e72;
  color: #fff;
  font-size: ${px2rem(14)};
  font-weight: 700;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

export { ContainerButton };
