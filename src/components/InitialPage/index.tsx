import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

export function InitialPage() {
    return (
        <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center flex-wrap degrade">
            <div className="container flex justify-center items-center ">
                <div className="animation-transition-left w-1/2 flex items-center justify-center">
                    <div>
                        <h1 className="text-4xl">
                            <span className="text-secondary text text-6xl font-extrabold">Anderson</span>
                            <span>Dias</span>
                        </h1>
                        <div>
                            <span className="font-light text-3xl">Sou desenvolvedor </span>
                            <strong className="text-blueLight font-extrabold text-2xl">front-end</strong>
                        </div>

                        <div className="flex w-full space-x-2">
                            <button className="degradeButton text-dark font-extrabold shadow-lg transition-colors mt-4 w-52 h-10 rounded-md">Projetos</button>
                            <button className="bg-transparent font-extrabold hover:text-blueLight transition-colors flex-1  h-10 border-2 border-secondary text-secondary mt-4 py-2 px-8 rounded-md">Contato</button>
                        </div>
                    </div>
                </div>

                <div className="animation-transition-right w-1/2 flex items-center justify-center">
                    <img className="w-80" src={'assets/developer-home.png'} alt="" />
                </div>
            </div>

            <div className="w-full container flex justify-center">
                <div className="animation-transition-top z-50 flex space-x-4 text-4xl text-secondary">
                    <a className="hover:-translate-y-1 transition-transform cursor-pointer">
                        <AiFillGithub />
                    </a>
                    <a className="hover:-translate-y-1 transition-transform cursor-pointer">
                        <AiFillLinkedin />
                    </a>

                    <a className="hover:-translate-y-1 transition-transform cursor-pointer">
                        <AiFillInstagram />
                    </a>
                </div>
            </div>
        </div>
    )
}