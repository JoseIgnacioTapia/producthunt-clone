"use client";
import Link from "next/link";
import Navegation from "./Navegation";
import Search from "./ui/Search";
import styled from "styled-components";

const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: var(--font-roboto), serif;
  margin-right: 2rem;
`;

function Header(): JSX.Element {
  return (
    <header style={{ borderBottom: "2px solid #e1e1e1", padding: "1rem 0" }}>
      <ContenedorHeader>
        <div>
          <Link href="/">
            <Logo>P</Logo>
          </Link>
          <Search />
          <Navegation />
        </div>
        <div>
          <p>Hola: Joe</p>
          <button type="button">Cerrar sesión</button>

          <Link href="/">Login</Link>
          <Link href="/">Crear cuenta</Link>
        </div>
      </ContenedorHeader>
    </header>
  );
}

export default Header;
