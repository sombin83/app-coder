"use client"
import { useState } from "react"
import Counter from "../ui/Counter"
import Boton from "../ui/Boton"
import { useCartcontext } from "../context/CardContext"


const QtySelector = ({ item }) => {


    const { addToCart } = useCartcontext()

    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {

        /*console.log({
            ...item,
            quantity 
        }) */

        addToCart({
            ...item,
            quantity
        })
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
            <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
            <Boton className="w-full hover:bg-amber-900" onClick={handleAdd}>Agregar al carrito</Boton>
        </div>
    )
}

export default QtySelector