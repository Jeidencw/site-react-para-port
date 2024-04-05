import './Localizacao.css'

const Localizacao = () => {
    return(
        <section className="localizacao section" id="localizacao">
            <h2 className="section__title localizacao__title">Localização</h2>
        
            <div className="localizacao__container container">
                <iframe title="localização no mapa do studio moov" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5095.582985202365!2d-49.26857795920935!3d-25.434208452536936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce469723fb173%3A0xf70e99e8be3796e!2sR.%20Bar%C3%A3o%20do%20Rio%20Branco%2C%20500%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080010-180!5e0!3m2!1spt-BR!2sbr!4v1712180722314!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy='no-referrer-when-downgrade'></iframe>
                
                <div className="localizacao__text">
                    <p>R. Barão do Rio Branco, 500 - Centro</p>
                    <p>Curitiba - PR, CEP 80010-180</p>
                </div>
            </div>
        </section>
    )
}

export default Localizacao