import React from 'react';
import Image from 'next/image';
import styles from "./styles.module.scss";

export const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <a
                    href="https://github.com/RaianSores"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{''}
                    <span className={styles.logo}>
                        <Image src="/favicon.ico" alt="Raian Logo" width={30} height={30} />
                    </span>
                </a>
                <p>
                    Copyright &copy; 2020 - Mindset Sistemas - Todos os direitos
                    reservados
                </p>

                <a
                    href="https://www.linkedin.com/in/raian-soares-pinheiro-375427139"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin"></i>
                </a>

                <a href="">
                    <i className="fab fa-instagram"></i>
                </a>

                <a href="https://github.com/RaianSores"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"></i>
                </a>
            </footer>
        </>
    )
}
