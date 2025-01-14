import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link to='/' className='logo'>Unidos pela Fé</Link>
            <nav>
            <Link to="sobre" className='sobre'>Sobre</Link>
            <Link to="portifolio" className='portifolio'>Portifolio</Link>
            <Link to ="contato" className='contato'>Contato</Link>
            </nav>
        </header>
    );
}

export default Header;