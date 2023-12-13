import ProductDetail from "@/app/components/productos/ProductDetail"

export async function generateMetadata({params,searchParams},parent)
{
    
   
    return {
        
      title: `CAUSA | Café ${params.slug}`,
      Description: `Café cosechado en origen, proveniente de ${params.slug}`,
      keywords: ['Cafe', 'Cafe Tostado', 'Cafe de Especialidad', 'Tostadero de Cafe', 'Micro Tostadero de Cafe']
    }
}


const DetailPage = ({params}) => {
    const {slug} = params

    return (
        <main className="container m-auto mt-10">
            <ProductDetail slug={slug}/>
        </main>
    )
}

export default DetailPage