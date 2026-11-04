import './styles.css'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

export function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                    <span>Contabilidade Simples</span>
                </Link>

                <nav>
                    <NavLink to="/sobre-nos">Sobre Nós</NavLink>
                    <NavLink to="/fale-conosco">Fale Conosco</NavLink>
                </nav>
            </div>
        </header>
    )

}