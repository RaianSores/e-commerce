import styled from "styled-components";

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
