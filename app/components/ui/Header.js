'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [

    {
        label: "Inicio",
        href: "/"
    },

    {

        label: "Cafés de Especialidad",
        href: "/cafes/todos"

    },

    {
        label: "Nosotros",
        href: "/nosotros"

    },
    {
        label: "Contacto",
        href: "/contacto"

    }
    



]



const Header = () => {

    //CAPTURO LA RUTA
    const pathname = usePathname();

  

    return (
        <div className="relative mx-auto z-50">
        <nav className="w-full border-t bg-neutral-700 bg-opacity-75">
            <div className="flex w-full flex-wrap items-center justify-between px-3 p-4">
            <Link href={"/"}>
                    <Image
                        src="/imgs/causa-logo.webp"
                        alt="logo-img"
                        width={150}
                        height={150}
                        placeholder = 'empty'
                    />
                </Link>

                
                <div className="flex justify-between gap-2 text-white">
                    {
                        links.map(link => {
                            return <Link
                                key={link.label}
                                href={link.href}
                                className={`${pathname === link.href ? 'font-bold' : ''} text-base text-slate-100 p-3`}
                            >
                                {link.label}
                            </Link>
                        }
                        )
                    }
                </div>

            </div>

        </nav>
        </div>
    )
}

export default Header