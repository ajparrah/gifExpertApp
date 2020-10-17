import React from 'react'

export const GifCard = ({image}) => {
    
    return (
        <div className="col-4 mt-2 animate__animated animate__fadeIn">
           <div className="card text-center">
                <img src={image.url} className="card-img-top" alt={image.title} style={{width: '100%', height: '200px'}}/>
                <div className="card-body" style={{height: '100px'}}>
                    <h5 className="card-title">{image.title}</h5>
                </div>
            </div> 
        </div>
        
    )
}
