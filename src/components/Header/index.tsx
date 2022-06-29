import Link from "next/link";

export function Header() {
    return (
        <header className="w-full h-14 flex items-center">
            <div className="container">
                <nav className="flex items-center justify-center">
                    <ul className="flex space-x-12 font-light">
                        <li className="cursor-pointer">
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href={'/sobre'}>Sobre</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href={'/projetos'}>Projetos</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href={'/contato'}>Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}