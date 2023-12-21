import Image from "next/image"
import Link from "next/link"

const ProductsTable = async () => {
    const items = await fetch(`http://localhost:3000/api/cafes/todos`, {
        cache: 'no-store',
    }).then(r => r.json())

    return (
        <>

            <div className="py-4">
                <Link href={"/admin/create"} className="float-right	rounded p-2 bg-orange-400 text-white">
                    Crear nuevo articulo
                </Link>
            </div>

            <div className="m-auto">
                <table className="w-full text-xs text-left text-gray-600">
                    <thead className="text-xs text-gray-700 uppercase">
                        <tr>
                            <th scope="col" className="px-3 py-2">Nombre</th>
                            <th scope="col" className="px-3 py-2">Precio</th>
                            <th scope="col" className="px-3 py-2">En stock</th>
                            <th scope="col" className="px-3 py-2">Tipo</th>
                            <th scope="col" className="px-3 py-2">Imagen</th>
                            <th scope="col" className="px-3 py-2">Slug</th>
                            <th scope="col" className="px-3 py-2">Descripción</th>
                            <th scope="col" className="px-3 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item) => (
                                <tr>
                                    <td className="p-2">{item.title}</td>
                                    <td className="p-2">{item.price}</td>
                                    <td className="p-2">{item.inStock}</td>
                                    <td className="p-2">{item.type}</td>
                                    <td className="p-2">
                                        <Image
                                            src={`/imgs/cafes/${item.image}`}
                                            alt={item.title}
                                            width={80}
                                            height={80}
                                        />
                                    </td>
                                    <td className="p-2">{item.slug}</td>
                                    <td className="p-2">{item.description}</td>
                                    <td className="p-2">
                                        <Link
                                            href={`/admin/edit/${item.slug}`}
                                            className="rounded bg-amber-900 p-2 text-white"
                                        >
                                            Editar
                                        </Link>
                                        &nbsp;
                                        <Link
                                            href="#"
                                            className="rounded bg-red-800 p-2 text-white"
                                        >
                                            Eliminar
                                        </Link>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </div>
        </>
    )
}

export default ProductsTable