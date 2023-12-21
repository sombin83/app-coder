'use client'
import { useEffect } from "react"
import { createContext, useContext, useState } from "react"
import { signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase/config"
import { logging } from "@/next.config"


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    const loginUser = async (values) => {

        //const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password)

        await signInWithEmailAndPassword(auth, values.email, values.password)
        
        /*const user = userCredential.user

        setUser({
            logged: true,
            email: user.email,
            uid: user.id
        })*/


    }

     const logout = async () => {
         await signOut(auth)
     }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)

            if (user){
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.id
                })

            }else{
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
            }
        })
    },[])

    return (

        <AuthContext.Provider value={{
            user,
            loginUser,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )


}

