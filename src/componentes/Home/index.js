import studio from '../../imagens/background2.jpg'
import logo from '../../imagens/logo.svg'
import './Home.css'
import Slide from './Slide'

const Home = () => {
    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__image" >
                    <p className="home__description">Transforme seu corpo, fortaleça sua mente: Descubra o equilíbrio aqui na <img src={logo} alt='logo' /></p>
                    <img src={studio} alt='' />
                </div>
            
                <Slide />
            </div>
        </section>
    )
}

export default Home