import React, {useState} from 'react';
import './style.css';


function AdicionarUsuario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    const funcaoAdicionarUsuario = (e) => {
        e.preventDefault();
        const novoUsuario = { nome, email };
        setUsuarios([...usuarios, novoUsuario]);
        setNome('');
        setEmail('');
    }
    
    
    return (
        <section className="user-manager">
            <header className="user-manager__header">
                <div>
                    <p className="user-manager__eyebrow">Cadastro de tripulacao</p>
                    <h1>Adicionar usuario</h1>
                </div>
                <span className="user-manager__index">01 / CREW</span>
            </header>

            <form className="user-form" onSubmit={funcaoAdicionarUsuario}>
                <div className="form-field">
                    <label htmlFor="nome">Nome completo</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Ex.: Alex Silva"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="nome@exemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Adicionar usuario</button>
            </form>

            <section className="user-list" aria-labelledby="user-list-title">
                <div className="user-list__header">
                    <h2 id="user-list-title">Tripulacao cadastrada</h2>
                    <span className="user-count" aria-label={`${usuarios.length} usuarios`}>{usuarios.length}</span>
                </div>
                {usuarios.length > 0 ? (
                    <ul>
                        {usuarios.map((usuario, index) => (
                            <li key={`${usuario.email}-${index}`}>
                                <span>{usuario.nome}</span>
                                <span>{usuario.email}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="user-list__empty">Nenhum usuario cadastrado nesta missao.</p>
                )}
            </section>
        </section>
    )
}

export default AdicionarUsuario