import { ReactNode } from "react"

type CardSkillProps = {
title: string 
icon: ReactNode

}

export function CardSkill({title, icon}: CardSkillProps) {
    return (
        <div className="p-2 card w-24 hover:-translate-y-2 transition-transform relative h-32 flex flex-col justify-center items-center rounded-xl shadow-lg">
            <div className="text-6xl text-secondary">
                {icon}
            </div>
            <p className="text-sm absolute bottom-3 ">{title}</p>
        </div>
    )
}