import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link to='/' className='logo'>Unidos pela Fé</Link>
            <Link to="sobre" className='sobre'>Sobre</Link>
            <Link to ="contato" className='contato'>Contato</Link>
        </header>
    );
}

export default Header;