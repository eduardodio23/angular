import './styles.css';

export default function Cabecalho() {
    return (
       <header>
        <Link to="/">Home</Link>

        <nav>
            <Link to='/cadastro'>Cadastrar</Link>
            <Link to='/usuarios'>Relatório</Link>
        </nav>
       </header>
    )
}