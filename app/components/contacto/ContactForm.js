
'use client'
import React from "react";
import { useState } from "react";
import Boton from "../ui/Boton";



const FormContacto = () => {

    const [values, setValues] = useState({
        email: '',
        mensaje: ''
    })


    const handleChange = (e) =>{

        setValues({
            ...values,
            [e.target.name]:e.target.value
        })

    }

    const handleSumbit = async (e) => {

        e.preventDefault()
        await fetch('http://localhost:3000/api/contacto',
        {
            method: "POST",
            body: JSON.stringify(values)
        }
        )

    }

    return (
        <>

            <main className="container mx-auto px-auto mt-5">

                <form onSubmit={handleSumbit}>
                    <h1 className="pl-40 mb-5 text-4xl font-extrabold text-neutral-500">Contacto</h1>
                    <div className="pl-40 pr-40 pt-6">
                        
                        <label htmlFor="frm-email">Email</label>
                        <input className="bg-white w-full border border-slate-300 rounded-md py-2 pl-9  sm:text-sm"
                            id="frm-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="pl-40 pr-40 pt-6">
                        <label htmlFor="frm-message">Mensaje</label>
                        <textarea className="bg-white w-full border border-slate-300 rounded-md py-2 pl-9  sm:text-sm"
                            id="frm-message"
                            rows="6"
                            name="mensaje"
                            onChange={handleChange}></textarea>
                    </div>
                    <div className="pl-40 pt-6">
                        <Boton type="submit">Enviar Mensaje</Boton>
                    </div>
                </form>
                <div className="pt-64">
                </div>
            </main>
        </>

    )


}

export default FormContacto