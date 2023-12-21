"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/firebase/config"
import Link from "next/link"


const CreateProduct = async (values, file) => {

    const storageRef = ref(storage, values.slug)
    const fileSnapshot = await uploadBytes(storageRef, file)
    const fileURL = await getDownloadURL(fileSnapshot.ref)

    const docRef = doc(db, "productos", values.slug)
    return setDoc(docRef, {
        ...values,
        image: fileURL
    })
        .then(() => console.log("Producto Agregado"))

}


const CreateForm = () => {

    const [values, setValues] = useState({
        title: '',
        description: '',
        inStock: 0,
        price: 0,
        type: '',
        slug: ''
    })

    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //await createProduct(values, file)
        await CreateProduct(values)
        //console.log(values)
    }

    return (

        <div className="container m-auto mt-6 min-w-48">
            <div className="py-4">
                <Link href={"/admin"} className="rounded w-full p-2 bg-amber-900 text-white">
                   ... Volver
                </Link>
            </div>
            <form onSubmit={handleSubmit} className="my-12">
                <label>Slug: </label>
                <input
                    type="text"
                    value={values.slug}
                    required
                    className="p-2 rounded w-full border border-ambar-100 block my-4"
                    name="slug"
                    onChange={handleChange}
                />



                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-ambar-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    allowMultiple={false}
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-ambar-100 block my-4"
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-ambar-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.inStock}
                    required
                    className="p-2 rounded w-full border border-ambar-100 block my-4"
                    name="inStock"
                    onChange={handleChange}
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    value={values.type}
                    required
                    className="p-2 rounded w-full border border-ambar-100 block my-4"
                    name="type"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border block border-ambar-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Boton type="submit">Enviar</Boton>
            </form>
        </div>

    )
}

export default CreateForm