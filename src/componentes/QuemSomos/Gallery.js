import { forwardRef } from 'react';
import './Gallery.css'

const Gallery = forwardRef((props, ref) => {
    return(
        <div className="gallery" ref={ref}>
            <h1>Galeria</h1>
        </div>
    )
})

export default Gallery