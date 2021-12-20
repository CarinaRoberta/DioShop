import styled from "styled-components";
import { px2rem } from "../../styles/global";

const HeaderWrapper = styled.div`
  background-color: #4e4d4a;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  height: ${px2rem(65)};
`;

const LogoTitle = styled.h1`
  font-size: ${px2rem(41)};
  font-weight: 700;
`;

const ItensHeader = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: ${px2rem(20)};
    color: #fff;
    padding: 0 ${px2rem(10)};
    transition: all 0.2s ease;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export { HeaderWrapper, HeaderContainer, LogoTitle, ItensHeader };
