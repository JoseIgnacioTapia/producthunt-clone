import Link from "next/link";
import Nav from "./NavegationStyle";

function Navegation() {
  return (
    <Nav>
      <Link href="/">Inicio</Link>
      <Link href="/">Populares</Link>
      <Link href="/">Nuevo Producto</Link>
    </Nav>
  );
}

export default Navegation;
