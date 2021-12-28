import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import { BsHeart } from "@react-icons/all-files/bs/BsHeart";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";
import { BsArrowDownShort } from "@react-icons/all-files/bs/BsArrowDownShort";
import { AiOutlineSend } from "@react-icons/all-files/ai/AiOutlineSend";
import {
  ButtonDepartment,
  ButtonSearch,
  CategoryNavigation,
  Container,
  ContainerCategory,
  Header,
  HeaderLayout,
  Input,
  Login,
  MenuCategory,
  MenuDepartment,
  Navigation,
  OptionalDependencies,
  SearchAplication,
  SearchForm
} from "./style";


export const Heading: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen);
  };
  
  return (
    <Container>
      <Header >
        <HeaderLayout>
          <Image src="/favicon.ico" alt="Logo" width={50} height={50} />
          <SearchAplication>
            <SearchForm
              action="search.search"
              method="GET"
            >
              <Input autoComplete="off" type="text" placeholder="Busque aqui" />
              <ButtonSearch type="submit">
                <AiOutlineSend size={40} />
              </ButtonSearch>
            </SearchForm>
          </SearchAplication>
          <OptionalDependencies>
            <Login>
              <Link href="/login">
                <a>
                  <FiLogIn size={45} />
                </a>
              </Link>
            </Login>
            <Link href="/">
              <a>
                <BsHeart size={30} />
              </a>
            </Link>
            <Link href="/">
              <a>
                <BiSupport size={30} />
              </a>
            </Link>
            <Link href="/cart">
              <a>
                <FiShoppingCart size={30} />
              </a>
            </Link>
          </OptionalDependencies>
        </HeaderLayout>
      </Header>

      <ContainerCategory>
        <MenuCategory>
          <MenuDepartment>
            <ButtonDepartment>
              TODOS OS DEPARTAMENTOS <BsArrowDownShort size={30} />
            </ButtonDepartment>
          </MenuDepartment>

          <Navigation>
            <CategoryNavigation>
              <Link href="">
                <a>LANÇAMENTOS</a>
              </Link>
              <Link href="">
                <a>CAMISAS</a>
              </Link>
              <Link href="">
                <a>BLUSAS</a>
              </Link>
              <Link href="">
                <a>CALÇAS</a>
              </Link>
              <Link href="">
                <a>SHORTS</a>
              </Link>
            </CategoryNavigation>
          </Navigation>
        </MenuCategory>
      </ContainerCategory>
    </Container>
  );
};
