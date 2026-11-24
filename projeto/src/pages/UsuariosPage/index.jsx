
import { useEffect, useState } from 'react';
import './style.css';
import api from './services/api';

export default function UsuariosPage() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const response = await api.get('/usuarios');
                setUsuarios(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        }

        fetchUsuarios();
    }, []);

    return (
        <div>
            <h1>Lista de Usuários</h1>

            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.email}>
                        <strong>{usuario.nome}</strong> - 
                        {usuario.email} - 
                        {usuario.telefone}
                    </li>
                ))}
            </ul>
        </div>
    );
}
