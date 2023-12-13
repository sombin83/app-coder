'use client'
import Boton from "./components/ui/Boton";
import { useRouter } from "next/navigation";


export default function NotFound() {


    const router=useRouter()
    
    return (
        <>
            <main className="container m-auto">

                <h1>Pagina no encontrada</h1>
                <hr/>

            <p className="text-base mt-4"> Ruta no encotrada </p>


            <Boton onClick={() => router.back()}  >
                Volver
            </Boton>

            </main>


        </>


    )


}
