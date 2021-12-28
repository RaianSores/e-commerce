import styled, { css } from "styled-components";
import { AiOutlineSend } from "@react-icons/all-files/ai/AiOutlineSend";

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
  background-color: transparent;
  position: absolute;
  z-index: 2;
  top: -12.5px;
  right: 15px;
  border: none;
  color: var(--grey-trash-icon);
  
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
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

const iconCSS = css`
  width: 30px;
  height: 30px;
  color: var(--grey-trash-icon);
`;

export const IconSend = styled(AiOutlineSend)`
  ${iconCSS}
`;