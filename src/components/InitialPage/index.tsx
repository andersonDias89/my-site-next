import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

export function InitialPage() {
    return (
        <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center flex-wrap">
            <div className="container flex justify-center items-center space-x-10">
                <div className="animation-transition-left">
                    <span className="font-light text-lg">Eu me chamo</span>
                    <h1 className="text-4xl">Anderson Dias</h1>
                    <span className="font-light text-lg">Sou desenvolvedor front-end</span>

                    <div className="flex space-x-4">
                        <button className="bg-secondary mt-4 py-1 px-5 rounded-md">Projetos</button>
                        <button className="bg-transparent border-2 border-secondary text-secondary mt-4 py-1 px-5 rounded-md">CV</button>
                    </div>
                </div>

                <div className="animation-transition-right">
                    <img className="w-72" src={'assets/img-home.png'} alt="" />
                </div>
            </div>

            <div className="w-full container flex justify-center">
                <div className="animation-transition-bottom flex space-x-4 text-3xl text-secondary">
                    <AiFillGithub />
                    <AiFillLinkedin />
                    <AiFillInstagram />
                </div>
            </div>
        </div>
    )
}