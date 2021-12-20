import React from "react";
import Header from "../../components/Header";
import ItensCard from "../../components/ItensCard";
import { CardList } from "./style";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <CardList>
        <ItensCard />
        <ItensCard />
        <ItensCard />
        <ItensCard />
      </CardList>
    </>
  );
};

export default Home;
