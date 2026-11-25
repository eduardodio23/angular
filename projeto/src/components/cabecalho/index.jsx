import './style.css';
import { Link, NavLink } from 'react-router-dom';

export default function Cabecalho() {
    return (
       <header>
        <Link to="/">Home</Link>

        <nav>
            <NavLink to='/listar-usuarios'>Usuários</NavLink>
            <NavLink to='/cadastrar-usuario'>Cadastrar</NavLink>
        </nav>
       </header>
    )
}