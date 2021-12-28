import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  background: var(--gold-dark);

  a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    width: 2.25rem;
    height: 2.25rem;
    color: var(--black-color);
  }

  p {
    font-size: 1.2rem;
    color: var(--black-color);

    @media screen and (max-width: 768px) {
      display: flex;
      position: relative;
      z-index: 1;
      font-size: 1rem;
      width: calc(50% - 50px);
    }
  }
`;
