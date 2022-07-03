import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Header() {
    const [currentPage, setCurrentPage] = useState("");
    const router = useRouter();

    useEffect(() => {
        setCurrentPage(router.pathname);
    }
    , [router.pathname]);


    return (
        <header className="w-full h-14 flex items-center">
            <div className="container">
                <nav className="flex items-center justify-center">
                    <ul className="flex space-x-12 font-light text-lg">
                        <li className={`cursor-pointer hover:text-blueLight py-1 px-3 transition-colors  rounded-md ${currentPage === '/' ? "border-b-2 border-blueLight bg-[#0e0e16] text-blueLight" : "border-none"}`}>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className={`cursor-pointer hover:text-blueLight py-1 px-3 transition-colors  rounded-md ${currentPage === '/sobre' ? "border-b-2 border-blueLight bg-[#0e0e16] text-blueLight" : "border-none"}`}>
                            <Link href={'/sobre'}>Sobre</Link>
                        </li>
                        <li className={`cursor-pointer hover:text-blueLight py-1 px-3 transition-colors  rounded-md ${currentPage === '/projetos' ? "border-b-2 border-blueLight bg-[#0e0e16] text-blueLight" : "border-none"}`}>
                            <Link href={'/projetos'}>Projetos</Link>
                        </li>
                        <li className={`cursor-pointer hover:text-blueLight py-1 px-3 transition-colors  rounded-md ${currentPage === '/contato' ? "border-b-2 border-blueLight bg-[#0e0e16] text-blueLight" : "border-none"}`}>
                            <Link href={'/contato'}>Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}