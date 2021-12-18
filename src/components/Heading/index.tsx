import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
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
  IconBar,
  Input,
  Login,
  Menu,
  MenuCategory,
  MenuDepartment,
  Navigation,
  OptionalDependencies,
  SearchAplication,
  SearchForm
} from "./style";


export const Heading = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <Header>
        <HeaderLayout>
          <Menu>
            <Link href="" passHref>
              <a>
                <FiMenu size={40} onClick={showSidebar} />
              </a>
            </Link>
          </Menu>
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

          <Login>
            <Link href="/login">
              <a>
                <FiLogIn size={45} />
              </a>
            </Link>
          </Login>

          <OptionalDependencies>
            <Link href="/">
              <a>
                <BsHeart size={30} />
              </a>
            </Link>
            <Link href="">
              <a>
                <BiSupport size={30} />
              </a>
            </Link>
            <Link href="">
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
