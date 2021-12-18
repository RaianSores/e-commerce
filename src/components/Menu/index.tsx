import Link from "next/link";
import { Container, Sidebar } from "./style";

export const Menu = () => {

  return (
    <Container>
        <Sidebar>
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
        </Sidebar>
    </Container>
  );
};
