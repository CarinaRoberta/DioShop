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

const ItensCard: React.FC = () => {
  return (
    <ContainerCard>
      <Thumbnail src={test} />
      <InfoContent>
        <ProductTitle>Camisa 1</ProductTitle>
        <ProductPrice>R$350</ProductPrice>
        <Button>Adicionar</Button>
      </InfoContent>
    </ContainerCard>
  );
};

export default ItensCard;
