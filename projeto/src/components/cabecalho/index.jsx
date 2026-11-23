import './styles.css';
import { Link, NavLink } from 'react-router-dom';

export default function Cabecalho() {
    return (
       <header>
        <Link to="/">Home</Link>

        <nav>
            <NavLink to='/cadastro'>Cadastrar</NavLink>
            <NavLink to='/listar-usuarios'>Usuários</NavLink>
        </nav>
       </header>
    )
}