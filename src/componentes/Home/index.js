import studio from '../../imagens/background2.jpg'                                                                                                                        
import './Home.css'
import Slide from './Slide'

const Home = () => {
    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__image" >
                    <p className="home__description">Slogan</p>
                    <img src={studio} alt='imagem generica' />
                </div>
            
                <Slide />
            </div>
        </section>
    )
}

export default Home