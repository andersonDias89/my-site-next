import { DiJavascript1, DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { CardSkill } from "./CardSkill";
import { AiFillHtml5 } from 'react-icons/ai'
import {GrGraphQl} from 'react-icons/gr'


export function AboutMe() {
    return (
        <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center degrade">
            <div className="container flex justify-center items-center space-x-10">
                <div className="space-y-2 shape animation-transition-left bg-gray-700 py-4 px-6 w-1/2 rounded-lg">
                    <img className="rounded-full w-28" src={'https://github.com/andersondias89.png'} alt="" />
                    <h2 className="text-2xl text-blueLight">Quem eu sou?</h2>
                    <div className="text-xs space-y-2">
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
                    <div className="grid grid-cols-4 gap-5">
                        {skills.map((item, index) => {
                            return (
                                <CardSkill
                                    key={index}
                                    title={item.title}
                                    icon={item.icon}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


const skills = [
    {
        title: 'Javascript',
        icon: <DiJavascript1 />
    },

    {
        title: 'HTML',
        icon: <AiFillHtml5 />
    },

    {
        title: 'CSS',
        icon: <DiCss3 />
    },

    {
        title: 'React',
        icon: <FaReact />
    },

    {
        title: 'Next',
        icon: <SiNextdotjs />
    },

    {
        title: 'Tailwind Ui',
        icon: <SiTailwindcss />
    },

    {
        title: 'Typescript',
        icon: <SiTypescript />
    },

    {
        title: 'Graphql',
        icon: <GrGraphQl />
    },
]


