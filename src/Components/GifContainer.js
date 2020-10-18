import React from 'react';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifCard } from './GifCard';
import { Spinner } from './Spinner/Spinner';

export const GifContainer = ({category}) => {
    const {data: images, loading} =  useFetchGifs(category);
    const renderCards = () => {
        return images.map((img) => (
            <GifCard
                key={img.id}
                image={img}
            />
        ))
    }
    return (
        <div className="row mb-3">
            {
                loading ? <Spinner/> : renderCards()
            }
        </div>
    )
}
