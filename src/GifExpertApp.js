import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifContainer } from './Components/GifContainer';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    const renderContainerCategory = () => {
        return categories
            .map((category) => (
            <div 
                key={category}
                className="text-center font-weight-light">
                <h3>{category}</h3>
                <GifContainer  
                    key={category}
                    category={category} 
                />
            </div>
        )
    )
    }
    const renderEmpty = () => {
        return <div className="text-center"> 
            <h1 className="font-weight-light">No has buscado ningún gif</h1>
            <h5 className="font-italic">¡Vamos! Busca el primero</h5>
        </div>
    }
    return(
        <div className="container py-3">
            <div className="sticky-top bg-white pb-2">
                <h2>GifExpertApp</h2>
                <AddCategory categories={setCategories} />
            </div>
            <hr></hr>
            
            {
                categories.length > 0 ? renderContainerCategory() : renderEmpty()
                
            }
        </div>
    )
}
