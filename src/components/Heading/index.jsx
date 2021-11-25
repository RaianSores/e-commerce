import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
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
            <a href="">
              <FiMenu size={40} />
            </a>
          </nav>
          <div className={styles.logoHeader}>
            <span>
              <Image src="/favicon.ico" alt="Logo" width={60} height={60} />
            </span>
          </div>


          <div className={styles.searchAplication}>
                        <form action="search.search" method="GET" className={styles.searchForm}>
                            <input autoComplete="off" type="text" placeholder="Busque aqui" />
                            <button type="submit" >
                                <AiOutlineSend size={40} />
                            </button>
                            <div className={styles.searchDiv}></div>
                        </form>
                    </div>
          
          <div className={styles.login}>
            <a href="">
              <FiLogIn size={45} />
            </a>
            <span>
              Faça
              <a href=""> Login </a>
              <br />
              ou
              <br />
              <a href=""> Cadastro</a>
            </span>
          </div>

          <div className={styles.optionalDependencies}>
            <a href="">
              <BsHeart size={30} />
            </a>
            <a href="">
              <BiSupport size={30} />
            </a>
            <a href="">
              <FiShoppingCart size={30} />
            </a>
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
                <a href="">LANÇAMENTOS</a>
                <a href="">DESTAQUES</a>
                <a href="">PC GAMER</a>
                <a href="">ELETRÔNICOS</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
