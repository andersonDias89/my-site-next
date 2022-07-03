import { BiMessageSquareCheck } from "react-icons/bi";

export function TitleContact() {
    return (
        <div className="w-1/2 flex items-center justify-center flex-col animation-transition-left">
            <div className="w-2/3">
                <h1 className="text-5xl ">
                    <div className="flex -mb-16">
                        <span>Fale</span>
                        <span className="text-blueLight"><BiMessageSquareCheck /></span>
                    </div>
                    <br /> <span className="text-blueLight font-extrabold text-7xl">comigo.</span>
                </h1>

                <p className=" mt-4">Envie sua mensagem e em breve entrarei em contato.
                    Será um prazer em falar com você!</p>
            </div>
        </div>
    )
}