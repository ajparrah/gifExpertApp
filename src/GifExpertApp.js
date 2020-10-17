import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifContainer } from './Components/GifContainer';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Mariah Carey'])
    return(
        <div className="container">
            <div className="sticky-top bg-white pb-2">
                <h2>GifExpertApp</h2>
                <AddCategory categories={setCategories} />
            </div>
            <hr></hr>
            
            {
                categories.map((category) => 
                    (<div 
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
        </div>
    )
}
