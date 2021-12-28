import React, { useState} from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
} from "./styles";

export const Sidebar: React.FC = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink>Lançamentos</SidebarLink>
                <SidebarLink>Camisas</SidebarLink>
                <SidebarLink>Blusas</SidebarLink>
                <SidebarLink>Calças</SidebarLink>
                <SidebarLink>Shorts</SidebarLink>
                <br />
                <SidebarLink>Login</SidebarLink>
                <SidebarLink>Suporte</SidebarLink>
                <SidebarLink>Carrinho</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}