import styled from "styled-components";

export const ContainerCategory = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  background-color: var(--gold-color);
`;

export const MenuCategory = styled.div`
  background-color: var(--gold-color);
  width: 100%;
  position: relative;
  z-index: 999;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const MenuDepartment = styled.div`
  background-color: var(--gold-dark);
  padding: 0px;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  position: relative;
`;

export const ButtonDepartment = styled.button`
  font-size: 14px;
  text-align: right;
  font-weight: 700;
  color: var(--white);
  background-color: transparent;
  position: relative;
  cursor: pointer;
  border: none;
  width: 262px;
  padding: 8px 53px 8px 0px;
  z-index: 2;
`;

export const Navigation = styled.div`
  width: 100%;
  position: relative;
`;

export const CategoryNavigation = styled.nav`
  max-width: 1216px;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;

  nav {
    max-width: 1216px;
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  a {
    font-size: 18px;
    font-weight: 700;
    padding: 8px 0px;
    color: rgb(255, 255, 255);
    margin: 0px 1px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    height: 2rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;