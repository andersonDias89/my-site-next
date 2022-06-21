import Link from "next/link";

export function InitialPage() {
    return (
        <div className="w-full">
            <div className="container">
                <h1>Home</h1>

                <Link href={'/sobre'}>
                    <h2 className="cursor-pointer w-96 h-80 bg-red-800 ">Ir para o sobre</h2>
                </Link>
            </div>
        </div>
    )
}