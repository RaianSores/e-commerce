import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

export const Header = styled.header`
  position: relative;
  z-index: 9999;
  width: 100%;
  padding: 0px 1.5rem;
  background: var(--black-color);

  > img {
    border-radius: 8px;
    margin-left: 2px;
    margin-right: 2px;
  }
`;

export const HeaderLayout = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex: 1 1 0%;
  gap: 1rem;
  max-width: 76rem;
  margin: 0px auto;
  width: 100%;
  padding: 16px 0px;
  height: 8rem;
`;

export const Menu = styled.div`
  a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    width: 2.25rem;
    height: 2.25rem;
    color: var(--grey-trash-icon);
  }
`;

export const IconBar = styled.link`
  margin: 0 auto;
  padding: 0;
`;

export const SearchAplication = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  width: calc(50% - 50px);
`;

export const SearchForm = styled.form`
  display: flex;
  position: relative;
  z-index: 8;
  width: calc(100% - 60px);
`;

export const ButtonSearch = styled.button`
  width: 25px;
  height: 65px;
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  z-index: 2;
  top: -12.5px;
  right: -115px;
  border: none;
  color: var(--grey-trash-icon);
`;

export const Input = styled.input`
  font-size: 0.875rem;
  line-height: 1.3125rem;
  position: relative;
  width: 100%;
  height: 2.25rem;
  padding: 12px 16px;
  background: var(--white);
  color: var(--text-grey-weak);
  border-radius: 0.25rem;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Login = styled.div`
  display: flex;
  flex-shrink: 0;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 10.375rem;

  span {
    font-size: 15px;
    color: var(--grey-trash-icon);
  }

  a {
    font-size: 15px;
    font-weight: 700;
    color: var(--grey-trash-icon);
    text-decoration: none;
  }
`;

export const OptionalDependencies = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    width: 2.25rem;
    height: 2.25rem;
    color: var(--grey-trash-icon);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

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
