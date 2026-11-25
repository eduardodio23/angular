import './style.css';

export default function Rodape() {
    const anoAtual = new Date().getFullYear();
    return (
       <div>
        <footer>
            <p>
                &copy; {anoAtual} - Todos os direitos reservados.
            </p>
            <p>SENAI - BAHIA</p>
        </footer>

       </div>
    )
}