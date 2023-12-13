'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {

    const pathname = usePathname();

    return (
            
        <footer className={pathname === '/' ? "absolute bottom-0 w-full bg-amber-950 mt-10 py-4":"bottom-0 w-full bg-amber-950 mt-10 py-4"}>
            <div className="container m-auto py-2 text-sm text-gray-700 flex justify-between items-center">
                <p className="items-center text-white">Café de especialidad directo a tu tasa</p>

                <div className="flex items-center gap-2 text-white">

                    <p>Coffee Roaster by</p>
                    <Image 
                    src={"/imgs/causa-logo.webp"}
                    alt="logo"
                    width={50}
                    height={50}
                    /> 
                </div>

            </div>
        </footer>
    )

}

export default Footer