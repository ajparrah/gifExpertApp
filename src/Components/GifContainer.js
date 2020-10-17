import React, {useState,useEffect} from 'react';
import { getGifs } from '../Helpers/GetGifs';
import {GifCard} from './GifCard';

export const GifContainer = ({category}) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        getGifs(category) //Esto se aislo en un helper. Por ser logica basica, para solo obtener los gift
            .then((gifs) => setImages(gifs));
    }, [category]); // Colocar esto dentro del array permite que cuando sea modificado category, sea ejecutado nuevamente el efecto... Y en este caso, el efecto hace un set sobre el state que determina que mostrar el componente Card

    return (
        <div className="row mb-3">
            {
                images.map((img) => (
                    <GifCard 
                        key={img.id}
                        image={img}
                    />
                ))
            }
        </div>
    )
}
