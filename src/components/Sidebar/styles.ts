import styled, { css } from "styled-components";

import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

type MenuProps = { isOpen?: boolean };

export const SidebarContainer = styled.aside<MenuProps>`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: var(--black-color);
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.5s ease-in-out;
    left: ${({ isOpen }) => (isOpen ? '0' : '-1420px')};

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  color: var(--grey-trash-icon);
`;

export const CloseIcon = styled(FaTimes)`
    ${iconCSS}
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(8, 60px);
    }
`;

export const SidebarLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: var(--gold-dark);
    cursor: pointer;

    &:hover {
        color: var(--orange-text);
        transition: 0.2s ease-in-out;
    }
`;
