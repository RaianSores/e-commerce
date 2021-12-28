import React from 'react'
import Link from "next/link";

import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import { BsHeart } from "@react-icons/all-files/bs/BsHeart";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";
import { Login, OptionalDependencies } from './styles';

export const DependenciesHeading = () => {
    return (
        <OptionalDependencies>
            <Login>
                <Link href="/login">
                    <a>
                        <FiLogIn size={45} />
                    </a>
                </Link>
            </Login>
            <Link href="/">
                <a>
                    <BsHeart size={30} />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <BiSupport size={30} />
                </a>
            </Link>
            <Link href="/cart">
                <a>
                    <FiShoppingCart size={30} />
                </a>
            </Link>
        </OptionalDependencies>
    )
}
