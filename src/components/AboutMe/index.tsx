import Link from "next/link";
import { DiJavascript1, DiCss3 } from 'react-icons/di'
import { ImHtmlFive } from 'react-icons/im'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'


export function AboutMe() {
    return (
        <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="container flex justify-center items-center space-x-10">
                <div className="space-y-2 shape animation-transition-left bg-gray-700 py-4 px-6 w-1/2 rounded-lg">
                    <img className="rounded-full w-28" src={'https://github.com/andersondias89.png'} alt="" />
                    <h2 className="text-2xl">Quem eu sou?</h2>
                    <div className="text-sm space-y-2">
                        <p>
                            Trabalhei durante alguns anos na área de design,
                            e autônomo como fotógrafo de eventos. Atualmente
                            estou no 1º período da minha graduação em análise e
                            desenvolvimento de sistemas pela universidade Estácio de Sá,
                            Ponta Negra RN.
                        </p>

                        <p>
                            Estou em uma conversão de carreira para a área tech,
                            preferencialmente no desenvolvimento de sistemas front-end, na qual,
                            tenho desejo de atuar profissionalmente. Cada dia fico mais entusiasmado
                            por cada conhecimento que venho adquirindo nessa nova trajetória profissional.
                        </p>
                    </div>
                </div>

                <div className="animation-transition-right w-1/2 flex items-center justify-center ">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="p-2 card w-24 hover:-translate-y-2 transition-transform relative h-32 flex flex-col justify-center items-center rounded-xl shadow-lg">
                            <div className="text-6xl text-secondary">
                                <DiJavascript1 />
                            </div>
                            <p className="text-sm absolute bottom-3 ">Javascript</p>
                        </div>

                        <div className="p-2 card relative w-24 hover:-translate-y-2 transition-transform h-32 flex flex-col justify-center items-center rounded-xl shadow-lg">
                            <div className="text-5xl text-secondary">
                                <ImHtmlFive />
                            </div>
                            <p className="text-sm absolute bottom-3">HTML</p>
                        </div>

                        <div className="p-2 card relative w-24 hover:-translate-y-2 transition-transform h-32 flex flex-col justify-center items-center rounded-xl shadow-lg">
                            <div className="text-5xl text-secondary">
                                <DiCss3 />
                            </div>
                            <p className="text-sm absolute bottom-3">CSS</p>
                        </div>

                         <div className="p-2 card relative w-24 hover:-translate-y-2 transition-transform h-32 flex flex-col justify-center items-center rounded-xl shadow-lg">
                            <div className="text-5xl text-secondary">
                            <FaReact />
                            </div>
                            <p className="text-sm absolute bottom-3">React</p>
                        </div>

                         <div className="p-2 card relative w-24 hover:-translate-y-2 transition-transform h-32 flex flex-col justify-center items-center rounded-xl shadow-lg">
                            <div className="text-5xl text-secondary">
                            <SiNextdotjs />
                            </div>
                            <p className="text-sm absolute bottom-3">Next</p>
                        </div>

                        <div className="p-2 card relative w-24 hover:-translate-y-2 transition-transform h-32 flex flex-col justify-center items-center rounded-xl shadow-lg">
                            <div className="text-5xl text-secondary">
                            <SiTailwindcss />
                            </div>
                            <p className="text-sm absolute bottom-3">Tailwind Ui</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

