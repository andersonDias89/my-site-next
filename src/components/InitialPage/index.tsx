import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

export function InitialPage() {
    return (
        <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center flex-wrap degrade">
            <div className="container flex justify-center items-center ">
                <div className="animation-transition-left w-1/2 flex items-center justify-center">
                    <div>
                        <span className="font-light text-xl">Eu me chamo,</span>
                        <h1 className="text-4xl"><span className="text-secondary">Anderson</span> Dias</h1>
                        <span className="font-light text-xl">Sou desenvolvedor front-end</span>

                        <div className="flex space-x-4">
                            <button className="degradeButton text-dark font-extrabold shadow-lg transition-colors mt-4 py-2 px-8 rounded-md">Projetos</button>
                            <button className="bg-transparent font-extrabold hover:text-blueLight transition-colors border-2 border-secondary text-secondary mt-4 py-2 px-8 rounded-md">CV</button>
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