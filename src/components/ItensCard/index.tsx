import React from "react";
import {
  ContainerCard,
  Thumbnail,
  InfoContent,
  ProductTitle,
  ProductPrice,
} from "./style";
import test from "../../assets/test.jpg";
import Button from "../Button";
import IProducts from "../../mock/Products/IProducts";

const ItensCard: React.FC<IProducts> = ({
  id_product,
  name_product,
  price,
}) => {
  return (
    <ContainerCard>
      <Thumbnail src={test} />
      <InfoContent>
        <ProductTitle>{name_product}</ProductTitle>
        <ProductPrice>R${price}</ProductPrice>
        <Button>Adicionar</Button>
      </InfoContent>
    </ContainerCard>
  );
};

export default ItensCard;
