import styled from "styled-components";
import { px2rem } from "../../styles/global";

const CardList = styled.div`
  padding: ${px2rem(15)} 0;
  display: grid;
  gap: ${px2rem(16)};
  grid-template-columns: repeat(auto-fill, minmax(277px, 1fr));

  @media screen and (max-width: 768px) {
    display: flex;
    overflow-x: scroll;
  }
`;
export { CardList}
