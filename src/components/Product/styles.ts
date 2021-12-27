import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 0;

  > a {
    font-size: 14px;
    text-decoration: none;
    color: var(--blue);
    padding: 2.5px 0;

    & + a {
      padding-left: 10px;
      margin-left: 10px;
      border-left: 1px solid var(--grey-line);
    }
  }
`;

export const Panel = styled.div`
  background: var(--white);
  box-shadow: var(--white-weak);

  display: grid;
  grid-template-columns: 65fr 35fr;
`;

export const Column = styled.div`
  &:first-child {
    border-right: 1px solid var(--grey-line);
  }
`;

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 530px;

  > img {
    height: 73%;
    border-radius: 5px;
  }
`;

export const Section = styled.div`
  border-top: 1px solid var(--grey-line);
  padding: 48px 32px;

  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 18px;
    margin-bottom: 40px;
  }
  > div {
    display: flex;
    flex-direction: column;

    > span + span {
      margin-top: 16px;
    }

    .title {
      font-size: 16px;
      color: var(--black-color);
    }
    .description {
      margin-top: 5px;
      font-size: 14px;
      color: var(--text-grey);
      line-height: 19px;
    }
  }
  > a {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--blue);
    text-decoration: none;
  }
`;

export const Description = styled.div`
  border-top: 1px solid var(--grey-line);
  padding: 44px 32px;

  > h2 {
    font-size: 24px;
    margin-bottom: 32px;
  }
  > p {
    font-size: 20px;
    color: var(--text-grey);
    line-height: 27px;
  }
`;
