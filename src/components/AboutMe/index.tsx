import Link from "next/link";

export function AboutMe() {
    return (
        <div className="w-full">
        <div className="container">
            <h1>Sobre</h1>

            <Link href={'/'}>
                <h2 className="cursor-pointer w-96 h-80 bg-green-800">Ir para o sobre</h2>
            </Link>
        </div>
    </div>
    )
}