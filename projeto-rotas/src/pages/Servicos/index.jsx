import { Link } from 'react-router-dom'
import './styles.css'

const servicos = [
    {
        numero: '01',
        titulo: 'Contabilidade',
        descricao: 'Organização contábil para apoiar decisões mais seguras no dia a dia da empresa.',
    },
    {
        numero: '02',
        titulo: 'Fiscal e tributário',
        descricao: 'Apuração de impostos e orientação para manter as obrigações fiscais em dia.',
    },
    {
        numero: '03',
        titulo: 'Departamento pessoal',
        descricao: 'Suporte com folha de pagamento, admissões e rotinas trabalhistas.',
    },
    {
        numero: '04',
        titulo: 'Abertura de empresa',
        descricao: 'Orientação nas etapas para formalizar seu negócio e começar com o pé direito.',
    },
]

export function Servicos() {
    return (
        <section className="page-panel services-page">
            <span className="section-eyebrow">NOSSO TIME JOGA JUNTO COM VOCÊ</span>
            <h1>Serviços</h1>
            <p className="section-intro">
                Soluções contábeis para sua empresa seguir em frente com organização e confiança.
            </p>

            <div className="service-grid">
                {servicos.map((servico) => (
                    <article className="service-card" key={servico.numero}>
                        <span>{servico.numero}</span>
                        <h2>{servico.titulo}</h2>
                        <p>{servico.descricao}</p>
                    </article>
                ))}
            </div>

            <Link className="section-cta" to="/fale-conosco">
                Fale com a gente
            </Link>
        </section>
    )
}
