import React, { useEffect, useState } from "react";
import GlobalContainer from "../../components/GlobalContainer";
import Header from "../../components/Header";
import ItensCard from "../../components/ItensCard";
import IProducts from "../../mock/Products/IProducts";
import products from "../../mock/Products/products";
import { CardList } from "./style";

const Home: React.FC = () => {
  const [productsList, setProductsList] = useState<IProducts[]>([]);

  useEffect(() => {
    setProductsList(products);
  }, []);

  return (
    <>
      <Header />
      <GlobalContainer>
        <CardList>
          {productsList.map((product) => (
            <ItensCard key={product.id_product} {...product} />
          ))}
        </CardList>
      </GlobalContainer>
    </>
  );
};

export default Home;
