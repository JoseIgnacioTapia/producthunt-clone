import Link from 'next/link';
import Navegation from './Navegation';
import Search from './ui/Search';

function Header(): JSX.Element {
  return (
    <header>
      <div>
        <div>
          <p></p>
          <Search />
          <Navegation />
        </div>
        <div>
          <p>Hola: Joe</p>
          <button type="button">Cerrar sesión</button>

          <Link href="/">Login</Link>
          <Link href="/">Crear cuenta</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
