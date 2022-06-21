import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

export function InitialPage() {
    return (
        <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center flex-wrap">
            <div className="container flex justify-center items-center space-x-10">
                <div className="animation-transition-left w-1/2 flex items-center justify-center">
                    <div>
                        <span className="font-light text-2xl">Eu me chamo,</span>
                        <h1 className="text-5xl"><span className="text-secondary">Anderson</span> Dias</h1>
                        <span className="font-light text-3xl">Sou desenvolvedor front-end</span>

                        <div className="flex space-x-4">
                            <button className="bg-secondary mt-4 py-2 px-8 rounded-md">Projetos</button>
                            <button className="bg-transparent border-2 border-secondary text-secondary mt-4 py-2 px-8 rounded-md">CV</button>
                        </div>
                    </div>
                </div>

                <div className="animation-transition-right w-1/2 flex items-center justify-center">
                    <img className="w-80" src={'assets/img-home.png'} alt="" />
                </div>
            </div>

            <div className="w-full container flex justify-center">
                <div className="animation-transition-bottom flex space-x-4 text-4xl text-secondary">
                    <AiFillGithub />
                    <AiFillLinkedin />
                    <AiFillInstagram />
                </div>
            </div>
        </div>
    )
}