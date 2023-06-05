import Link from "next/link";
import Nav from "./NavegationStyle";

function Navegation() {
  return (
    <Nav>
      <Link href="/">Inicio</Link>
      <Link href="/populares">Populares</Link>
      <Link href="/nuevo-producto">Nuevo Producto</Link>
    </Nav>
  );
}

export default Navegation;
