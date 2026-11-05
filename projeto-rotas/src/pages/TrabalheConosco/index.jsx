import { Link } from 'react-router-dom'
import './styles.css'

export function TrabalheConosco() {
    return (
        <section className="page-panel careers-page">
            <span className="section-eyebrow">VEM FAZER PARTE DO TIME</span>
            <h1>Trabalhe Conosco</h1>
            <p className="section-intro">
                Acreditamos que bons resultados são construídos em equipe. Se você gosta de aprender,
                colaborar e ajudar empresas a crescer, queremos conhecer você.
            </p>

            <div className="careers-highlight">
                <span aria-hidden="true">★</span>
                <div>
                    <h2>Jogue junto com a gente</h2>
                    <p>
                        Conte um pouco sobre sua experiência e sobre como pode contribuir com nosso
                        time. Estamos sempre abertos a conhecer novos talentos.
                    </p>
                </div>
            </div>

            <Link className="section-cta" to="/fale-conosco">
                Entre em contato
            </Link>
        </section>
    )
}
