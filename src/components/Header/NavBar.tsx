import Link from "next/link";

export function NavBar() {
    return (
        <ul className="flex space-x-[40px] text-[18px] lg:hidden">
            <Link href={'/'}>
                <a>Home</a>
            </Link>

            <Link href={'/sobre'}>
                <a>Sobre</a>
            </Link>

            <Link href={'/projetos'}>
                <a>Projetos</a>
            </Link>

            <Link href={'/contato'}>
                <a>Contato</a>
            </Link>
        </ul>
    )
}