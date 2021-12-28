import React from 'react';
import Link from "next/link";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
} from "./styles";

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
}

export const Sidebar = (props: SidebarProps) => {

    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink>Lançamentos</SidebarLink>
                <SidebarLink>Camisas</SidebarLink>
                <SidebarLink>Blusas</SidebarLink>
                <SidebarLink>Calças</SidebarLink>
                <SidebarLink>Shorts</SidebarLink>
                <br />
                <SidebarLink>
                    <Link href="/login">
                        <a>
                            <FiLogIn size={30} /> Login
                        </a>
                    </Link>
                </SidebarLink>
                <SidebarLink>
                    <Link href="/">
                        <a>
                            <BiSupport size={30} /> Suporte
                        </a>
                    </Link>
                </SidebarLink>
                <SidebarLink>
                    <Link href="/cart">
                        <a>
                            <FiShoppingCart size={30} /> Carrinho
                        </a>
                    </Link>
                </SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}