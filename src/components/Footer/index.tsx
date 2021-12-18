import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { RiAdminFill } from "@react-icons/all-files/ri/RiAdminFill";
import { Container } from "./style";

export const Footer = () => {
    return (
        <>
            <Container>
                <Link href="/dashboard">
                    <a>
                        <RiAdminFill size={30} />
                    </a>
                </Link>
                <span>
                    <Image src="/favicon.ico" alt="Logo" width={30} height={30} />
                </span>
                <p>
                    Copyright &copy; 2020 - Mindset Sistemas - Todos os direitos
                    reservados
                </p>
            </Container>
        </>
    )
}
