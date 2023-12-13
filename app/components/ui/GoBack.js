"use client"
import { useRouter } from "next/navigation"
import Boton from "./Boton"

const GoBack = ({...args}) => {
    const router = useRouter()

    return (
        <Boton className="hover:bg-amber-900" onClick={() => router.back()} {...args}>
            Volver
        </Boton>
    )
}

export default GoBack