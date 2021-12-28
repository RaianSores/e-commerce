import React from 'react';
import { Nav, NavIcon, Bars } from "./styles";

interface NavbarProps {
    toggle: () => void;
}

export const Navbar = (props: NavbarProps) => {
    return (
        <>
            <Nav>
                <NavIcon onClick={props.toggle}>
                    <p>Menu</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    )
}
