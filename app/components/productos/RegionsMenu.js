"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { label: "Todos", href: "/cafes/todos", },
    { label: "Brasil", href: "/cafes/brasil", },
    { label: "Colombia", href: "/cafes/colombia", },
    { label: "Africa", href: "/cafes/africa", },
    { label: "Mexico", href: "/cafes/mexico", },
    { label: "Guatemala", href: "/cafes/guatemala", },
    { label: "Especiales", href: "/cafes/special", }
]

const RegionsMenu = () => {
    const pathname = usePathname()

    return (
        <aside className="flex flex-col gap-3">
            {links.map(link => (
                    <Link 
                        key={link.label} 
                        href={link.href}
                        className={`${pathname === link.href ? "font-semibold border-b" :''} py-2`}
                    >
                        {link.label}
                    </Link>
                ))}
        </aside>
    )
}

export default RegionsMenu