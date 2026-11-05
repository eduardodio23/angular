import './styles.css'

export function Home() {
    return (
        <div className="page-panel home-page">
            <section className="home-hero">
                <div className="bahia-badge" aria-label="Emblema gráfico inspirado nas cores do Bahia">
                    <span className="badge-star" aria-hidden="true">★</span>
                    <strong>ECB</strong>
                    <span className="badge-name">BAHIA</span>
                    <span className="badge-stripes" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                    </span>
                </div>
                <div className="home-copy">
                    <span className="home-eyebrow">AZUL, VERMELHO E BRANCO</span>
                    <h1>Ninguém nos vence em vibração!</h1>
                    <p>Uma paixão que toma conta da arquibancada e acompanha o Esquadrão em qualquer lugar.</p>
                </div>
            </section>

            <section className="supporter-phrases" aria-label="Frases de torcida">
                <article>
                    <span>01</span>
                    <p>Bahia, orgulho que atravessa gerações.</p>
                </article>
                <article>
                    <span>02</span>
                    <p>Três cores, uma só paixão.</p>
                </article>
                <article>
                    <span>03</span>
                    <p>Na alegria e na luta, sempre ao seu lado.</p>
                </article>
            </section>
        </div>
    )
}