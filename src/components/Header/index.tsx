import React from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  ItensHeader,
  LogoTitle,
} from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import GlobalContainer from "../GlobalContainer";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <GlobalContainer>
        <HeaderContainer>
          <LogoTitle>DioShop</LogoTitle>
          <ItensHeader>
            <a href="">Home</a>
            <a href="">Contato</a>
            <a href="">
              <AiOutlineShoppingCart size={25} />
            </a>
          </ItensHeader>
        </HeaderContainer>
      </GlobalContainer>
    </HeaderWrapper>
  );
};

export default Header;
