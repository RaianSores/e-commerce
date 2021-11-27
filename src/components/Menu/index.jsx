import Link from "next/link";
import { useEffect } from "react";

export const Menu = () => {
  const handleMenu = () => {
    const hamburguer = document.querySelector(".hamburguer");

    hamburguer.addEventListener("click", function () {
      document.querySelector(".container").classList.toggle("show-menu");
    });
  };

  useEffect(() => {
    handleMenu();
  });

  return (
    <div className="container">
      <div className="hamburguer" onClick={handleMenu}>
        <div className="line" id="line1"></div>
        <div className="line" id="line2"></div>
        <div className="line" id="line3"></div>
        <span>fechar</span>
      </div>
      <aside className="sidebar">
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <Link href="">
                <a className="menu-link">Minha conta</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="">
                <a>Meus pedidos</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="">
                <a>Favoritos</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="">
                <a>Atendimentos</a>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};
