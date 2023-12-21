"use client"
import { useAuthContext } from "../context/AuthContext"
import Boton from "../ui/Boton"

const LogoutButton = () => {
    const { logout } = useAuthContext()

    return <Boton onClick={logout} className="mt-3 bg-red-900">Log Out</Boton>
}

export default LogoutButton