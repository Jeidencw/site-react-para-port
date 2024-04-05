import { Swiper, SwiperSlide } from 'swiper/react'
import { forwardRef, useState } from 'react'
import './Gallery.css'
import closeBtn from '../../imagens/close__btn.svg'
import { FreeMode, Thumbs } from "swiper/modules"

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
]

const Gallery = forwardRef((props, ref) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [showGallery, setShowGallery] = useState(true)

    const closeGallery = () => {
        setShowGallery(false)
    }

    return(
        <div className={`gallery ${showGallery ? 'show' : 'hide'}`} ref={ref}>
            <button className="close-btn" onClick={closeGallery}><img src={closeBtn} alt='fechar' /></button>
        
            <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className='gallery__slides'
            >
                {images.map((image, index) => (
                        <SwiperSlide key={index} className='gallery__image'><img src={`gallery/${image}`} alt={image} /></SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className='gallery__slides-thumbs'
            >
                {images.map((image, index) => (
                        <SwiperSlide key={index} className='gallery__image'><img src={`gallery/${image}`} alt={image} /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
})

export default Gallery