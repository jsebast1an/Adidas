import React from 'react'

function Select() {
    return ( <div> 
                {Array.map( img => <div>
                                        <img src={img.src} alt={img.alt} width={50} height={50} />
                                    </div>)}

            </div>)
} 

function CambioImg() {
    return (
        <div>
            
        </div>
    )
}

export default CambioImg
