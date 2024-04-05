import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import { Autoplay, Navigation, Keyboard, EffectFade } from 'swiper/modules';

import 'swiper/css/effect-fade'

import testemunha1 from '../../imagens/testemunha1.jpg'
import testemunha2 from '../../imagens/testemunha2.jpg'
import testemunha3 from '../../imagens/testemunha3.jpg'
import testemunha4 from '../../imagens/testemunha4.jpg'
import testemunha5 from '../../imagens/testemunha5.jpg'
import testemunha6 from '../../imagens/testemunha6.jpg'


const depoimentos = [
    {  
        id: 'jnsd@#',
        img: testemunha1,
        name: 'Davi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu libero at tortor pellentesque gravida',
    },
    {
        id: 'MNBSD&S',
        img: testemunha2,
        name: 'Cleiton',
        description: 'Mauris lacinia justo id sem fringilla, et blandit sem lacinia. Nulla ultrices nisi ut felis dapibus aliquet.',
    },
    {
        id: 'SMNCC*&S',
        img: testemunha3,
        name: 'Jasmini',
        description: 'Etiam tristique hendrerit ornare. Vestibulum pharetra mattis ipsum, id dictum libero efficitur at. Proin faucibus vulputate ipsum. Vivamus luctus magna eget nisi blandit',
    },
    {
        id: 'AHSB@HS',
        img: testemunha4,
        name: 'Veronica',
        description: 'Nam aliquet pellentesque luctus. Praesent volutpat, leo non lobortis maximus',
    },
    {
        id: 'KJGA$@CS',
        img: testemunha5,
        name: 'Cascão',
        description: 'lacus nisi scelerisque odio, eu iaculis ex quam sed dui.',
    },
    {
        id: 'iugi897',
        img: testemunha6,
        name: 'Magali',
        description: 'Integer ante ante, tempor vel hendrerit nec, accumsan id purus. Praesent posuere enim orci, vitae dictum mauris porttitor sed.',
    },
]
 

const Depoimentos = () => {

    const [slidesPerView, setSlidePerView] = useState(3)
    const [navigation, setNavigation] = useState(true)
    const [spaceBetweenSlides, setSpaceBetweenSlides] = useState(30)

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 950){
                setSlidePerView(2)
                setNavigation(false)
                setSpaceBetweenSlides(10)
            }else{
                setSlidePerView(3)
                setNavigation(true)
                setSpaceBetweenSlides(30)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])
    
  return (  
        <div className='slide__containerDepoimentos'>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetweenSlides}
                slidesPerGroup={3}
                grabCursor={true}
                keyboard={{ enabled: true }}
                navigation={navigation}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay, Navigation, Keyboard, EffectFade]}
                className="slide__containerDepoimentos"
            >

                {depoimentos.map((depoimento) => (
                    <SwiperSlide key={depoimento.id} className='cardDepoimentos'>
                        <div className="image__contentDepoimentos">
                            <span className="overlay"></span>

                            <div className="card__imageDepoimentos">
                            <img src={depoimento.img} alt='foto da testemunha' className="card__imgDepoimentos" />
                            </div>
                        </div>

                        <div className="card__contentDepoimentos">
                            <h2 className="nomeDepoimentos">{depoimento.name}</h2>
                            <p className="descriptionDepoimentos">{depoimento.description}</p>        
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>      
        </div> 

  );
}

export default Depoimentos