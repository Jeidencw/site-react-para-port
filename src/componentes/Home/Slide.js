import { Swiper, SwiperSlide } from 'swiper/react';
import './Slide.css'

import { Autoplay, Navigation, Keyboard, EffectFade } from 'swiper/modules';

import { useEffect, useState } from 'react';
import Modal from '../Servicos/Modal';
import { services } from '../Servicos'

const servicosSlides = [
    {
        name: 'Slide 1',
        foto: '#D8BFD8',
        id: 'jgsad873',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a libero augue.'
    },
    {
        name: 'Slide 2',
        foto: '#9370DB',
        id: 'ma,n34',
        description: 'Donec felis nulla, finibus ac purus ut, tempus venenatis arcu. Nulla nec congue urna.'
    },
    {
        name: 'Slide 3',
        foto: '#98FB98',
        id: 'nbsd3934',
        description: 'Praesent et tristique purus, non consectetur eros. '
    },
    {
        name: 'Slide 4',
        foto: '#8FBC8F',
        id: 'qwoiey3846',
        description: 'Vestibulum et venenatis lectus. Donec enim ante, varius id ultrices non, molestie id orci. Nam ut rutrum diam.'
    }
]

const Slide = () => {
    const [isActive, setIsActive] = useState(null);
    const [selectedService, setSelectedService] = useState(null);


    const openModal = (servicess) => { 
        const test = services.find(service => service.name === servicess.name);
        setIsActive(true);
        setSelectedService(test);
    };
  
    const closeModal = event => {
        if(event.target.className === 'services__modal modal active-modal' || event.target.className === 'uil uil-times services__modal-close'){
            setIsActive(false);
            setSelectedService(null);
        }
    };

    const [navigation, setNavigation] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 950){
                setNavigation(false)
            }else{
                setNavigation(true)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])


    return(
        <Swiper
            grabCursor={true}
            keyboard={{ enabled: true }}
            navigation={navigation}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay, Navigation, Keyboard, EffectFade]}
            className="slide__container"
        >
            {servicosSlides.map((servico) => (
                <SwiperSlide key={servico.id} className='card' onClick={() => openModal(servico)}>
                    <div className='card__image' style={{ backgroundColor: `${servico.foto}` }}></div>
                    
                    <div className='card__content'>
                        <h2 className='slide__title'>{servico.name}</h2>
                        <p className='slide__description'>{servico.description}</p>
                    </div>
                </SwiperSlide>
            ))}
            {isActive && <Modal openModal={isActive} closeModal={closeModal} service={selectedService} />}
        </Swiper>
    )
}

export default Slide