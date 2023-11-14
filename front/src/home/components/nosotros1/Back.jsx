import React from 'react'
import { useLocation } from 'react-router-dom'

// Esto se cocentra en el About 

const Back = ({title}) => {
    const location = useLocation()
    return (
        <div>
        <section className='back'>
            <h1>{title}</h1>
        </section>
        <div className="marigin"></div>
        </div>
    )
}

export default Back