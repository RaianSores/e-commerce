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