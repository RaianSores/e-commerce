import React from 'react';
import Image from 'next/image';
import styles from "./styles.module.scss";

export const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <span className={styles.logo}>
                    <Image src="/favicon.ico" alt="Logo" width={30} height={30} />
                </span>

                <p>
                    Copyright &copy; 2020 - Mindset Sistemas - Todos os direitos
                    reservados
                </p>

            </footer>
        </>
    )
}
