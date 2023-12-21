'use client' 

import Boton from '../components/ui/Boton'

import { useEffect } from 'react'

export default function Error({ error, reset }) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="container m-auto mt-8">
            <h2 className='text-xl'>Ups! Parece que hubo un error...</h2>
            <hr className='my-6'/>
            <Boton onClick={reset}>Intentar nuevamente</Boton>
           
        </div>
    )
}