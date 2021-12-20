import styled from "styled-components";
import { px2rem } from "../../styles/global";

const ContainerCard = styled.div`
  border: 1px solid #ccc;
  width: 100%;
  height: ${px2rem(320)};
  border-radius: 8px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

const Thumbnail = styled.img`
  width: 100%;
  height: ${px2rem(150)};
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${px2rem(10)};
  padding: ${px2rem(10)};

  button {
    margin-top: ${px2rem(10)};
  }
`;

const ProductTitle = styled.h2`
  font-size: ${px2rem(22)};
  font-weight: 700;
`;

const ProductPrice = styled.span`
  margin-top: ${px2rem(10)};
  font-size: ${px2rem(20)};
`;

export { ContainerCard, Thumbnail, InfoContent, ProductTitle, ProductPrice };
