import Link from "next/link";

export function InitialPage() {
    return (
        <div className="w-full">
            <div className="container flex justify-center space-x-8">
                <div className="animation-transition-left mt-20">
                    <span className="font-light text-lg">Eu me chamo</span>
                    <h1 className="text-4xl">Anderson Dias</h1>
                    <span className="font-light text-lg">Sou desenvolvedor front-end</span>

                    <div>
                        <button className="bg-secondary mt-4 py-1 px-5 rounded-md">Projetos</button>
                    </div>
                </div>

                <div className="animation-transition-right mt-20">
                    <img className="w-60" src={'assets/img-home.png'} alt="" />
                </div>
            </div>
        </div>
    )
}