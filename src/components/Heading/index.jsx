import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import styles from "./styles.module.scss";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import { BsHeart } from "@react-icons/all-files/bs/BsHeart";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";
import { BsArrowDownShort } from "@react-icons/all-files/bs/BsArrowDownShort";
import { AiOutlineSend } from "@react-icons/all-files/ai/AiOutlineSend";
import { GrClose } from "@react-icons/all-files/gr/GrClose";

import { SidebarData } from "./SidebarData";

export const Heading = () => {
  const router = useRouter()
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className={styles.containerHeader}>
      <div className={styles.header}>
        <div className={styles.headerLayout}>
          <div className="navbar">
            <Link href="" passHref>
              <a>
                <FiMenu size={40} onClick={showSidebar} />
              </a>
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link href="#" className="menu-bars" passHref>
                  <GrClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link href={item.path} passHref>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
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
              <Link href="/login">
                <a>Login</a>
              </Link>
              <span> ou</span>
              <Link href="/register">
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
