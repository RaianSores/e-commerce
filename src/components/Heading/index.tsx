import React, { useState } from "react";
import Image from 'next/image';

import {
  Container,
  Header,
  HeaderLayout,
} from "./styles";

import { Sidebar } from "../Sidebar";
import { Navbar } from "../Navbar";
import { SearchProducts } from "../Search";
import { CategoryAction } from "../CategoryAction";
import { DependenciesHeading } from "../DependenciesHeading";

export const Heading: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Header >
        <HeaderLayout>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Image src="/favicon.ico" alt="Logo" width={50} height={50} />
          <SearchProducts />
          <DependenciesHeading />
        </HeaderLayout>
      </Header>
      <CategoryAction />
    </Container>
  );
};
