

import React from "react";
import FormContacto from "../components/contacto/ContactForm";

export const metadata = {

    title: "Causa Tostadores de Café",
    Description: "CAUSA - Microtostadero de Café artesanal de especialidad",

}

const Contacto = () => {

    return (
        <>

            <main className="container mx-auto px-auto mt-5">

               <FormContacto />
            </main>
        </>

    )


}

export default Contacto