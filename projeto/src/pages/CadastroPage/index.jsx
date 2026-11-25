import { useState } from 'react';
import api from '../../services/api';
import './style.css';

export default function CadastroPage() {
    const [usuario, setUsuario] = useState({
        nome: '',
        email: '',
        telefone: '',
    });
    const [mensagem, setMensagem] = useState('');

    function atualizarCampo(event) {
        const { name, value } = event.target;
        setUsuario((atual) => ({ ...atual, [name]: value }));
    }

    async function cadastrar(event) {
        event.preventDefault();
        setMensagem('');

        try {
            await api.post('/usuarios', usuario);
            setUsuario({ nome: '', email: '', telefone: '' });
            setMensagem('Usuário cadastrado com sucesso.');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            setMensagem('Não foi possível cadastrar o usuário.');
        }
    }

    return (
        <section>
            <h1>Cadastrar usuário</h1>
            <form onSubmit={cadastrar}>
                <label htmlFor="nome">Nome</label>
                <input id="nome" name="nome" value={usuario.nome} onChange={atualizarCampo} required />

                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" value={usuario.email} onChange={atualizarCampo} required />

                <label htmlFor="telefone">Telefone</label>
                <input id="telefone" name="telefone" value={usuario.telefone} onChange={atualizarCampo} required />

                <button type="submit">Cadastrar</button>
            </form>
            {mensagem && <p role="status">{mensagem}</p>}
        </section>
    );
}