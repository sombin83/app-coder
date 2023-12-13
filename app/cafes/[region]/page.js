import RegionsMenu from "@/app/components/productos/RegionsMenu"
import ProductsList from "@/app/components/productos/ProductsList"
import { Suspense } from "react"


export async function generateMetadata({params,searchParams},parent)
{
    
    return {
      title: `CAUSA | Nuestros Cafés | ${params.region}`,
      Description: `Café cosechado en origen, proveniente de ${params.region}`,
      keywords: ['Cafe', 'Cafe Tostado', 'Cafe de Especialidad', 'Tostadero de Cafe', 'Micro Tostadero de Cafe']
    }
}

const Cafes = ({ params }) => {

    const { region } = params

    return (

        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Nuestros Cafés</h2>

            <div className="flex gap-10">
                <RegionsMenu />
                <Suspense fallback={<div> Cargando cafe de {region}...</div>}>
                <ProductsList region={region}/>
                </Suspense>
            </div>
        </main>
    )

}

export default Cafes