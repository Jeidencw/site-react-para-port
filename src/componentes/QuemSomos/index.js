import Depoimentos from './Depoimentos'
import './QuemSomos.css'
import galleryIcons from '../../imagens/gallery.svg'
import Gallery from './Gallery'
import { useEffect, useRef, useState } from 'react'

const QuemSomos = () => {
    const [showGallery, setShowGallery] = useState(false)
    const galleryRef = useRef(null)

    const toggleGallery = () => {
        setShowGallery(!showGallery)
    }

    const handleClickOutside = (event) => {
        if (galleryRef.current && !galleryRef.current.contains(event.target)) {
            setShowGallery(false)
        }
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return(
        <section className="depoimentos section" id="depoimentos">
            <div className='depoimentos__container container'>
                {showGallery && <Gallery ref={galleryRef} />}
                
                <img src={galleryIcons} alt='icone galeria' className='icon__gallery' onClick={toggleGallery} />
                <h2 className="section__title depoimentos__title">Quem somos</h2>
                <p className="depoimentos__text">Vivamus sit amet feugiat risus. Ut sollicitudin sed ante sed rutrum. Praesent ut augue eget ante scelerisque sollicitudin at sed velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeosvimento e na dor.<br /></p>

                <span className="section__subtitle depoimentos__subtitle">Depoimentos</span>
                
                <Depoimentos />
            </div>
        </section>
    )
}

export default QuemSomos