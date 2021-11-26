import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import { BsHeart } from "@react-icons/all-files/bs/BsHeart";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";
import { BsArrowDownShort } from "@react-icons/all-files/bs/BsArrowDownShort";
import { TextInput } from "../TextInput";
import { AiOutlineSend } from "@react-icons/all-files/ai/AiOutlineSend";

export const Heading = () => {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.header}>
        <div className={styles.headerLayout}>
          <nav className={styles.containerNav}>
            <Link href="">
              <a>
                <FiMenu size={40} />
              </a>
            </Link>
          </nav>
          <div className={styles.logoHeader}>
            <span>
              <img src="/logo.png" alt="Logo" />
            </span>
          </div>

          <div className={styles.searchAplication}>
            <form
              action="search.search"
              method="GET"
              className={styles.searchForm}
            >
              <input autoComplete="off" type="text" placeholder="Busque aqui" />
              <button type="submit">
                <AiOutlineSend size={40} />
              </button>
              <div className={styles.searchDiv}></div>
            </form>
          </div>

          <div className={styles.login}>
            <Link href="">
              <a>
                <FiLogIn size={45} />
              </a>
            </Link>
            <span>
              <span>Faça </span>
              <Link href="">
                <a>Login</a>
              </Link>
              <span> ou</span>
              <Link href="">
                <a> Cadastro</a>
              </Link>
            </span>
          </div>

          <div className={styles.optionalDependencies}>
            <Link href="">
              <a>
                <BsHeart size={30} />
              </a>
            </Link>
            <Link href="">
              <a>
                <BiSupport size={30} />
              </a>
            </Link>
            <Link href="">
              <a>
                <FiShoppingCart size={30} />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.containerCategory}>
        <div className={styles.menuCategory}>
          <div className={styles.menuDepartment}>
            <button>
              TODOS OS DEPARTAMENTOS <BsArrowDownShort size={30} />
            </button>
          </div>
          <div className={styles.navigation}>
            <nav>
              <div className={styles.categoryNavigation}>
                <Link href="">
                  <a>LANÇAMENTOS</a>
                </Link>
                <Link href="">
                  <a>CAMISAS</a>
                </Link>
                <Link href="">
                  <a>BLUSAS</a>
                </Link>
                <Link href="">
                  <a>CALÇAS</a>
                </Link>
                <Link href="">
                  <a>SHORTS</a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
