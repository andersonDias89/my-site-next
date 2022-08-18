import { Button } from "../../common/Button";
import { Browsers, ChatCircleDots } from 'phosphor-react'

export function TitleHome() {
    return (
        <div className="flex flex-col items-center lg:w-full lg:flex-1 lg:justify-end lg:pb-5">
            <h1 className="font-extrabold text-title-large xs:text-[36px] lg:text-[45px]">Anderson Dias</h1>
            <span className="tracking-widest -mt-3 text-subtitle-large xs:text-[14px] lg:text-[16px] font-light">Desenvolvedor front-end | UX/UI Design</span>
            <div className="flex gap-4 mt-4 lg:gap-0 lg:flex-col lg:w-full lg:space-y-5">
                <Button
                    type="button"
                    title="Projetos"
                    icon={<Browsers size={24} weight="fill" />}
                    style="buttonPrimary"
                />

                <Button
                    type="button"
                    title="Contato"
                    icon={<ChatCircleDots size={24} weight="fill" />}
                    style="buttonSecondary"
                />
            </div>
        </div>
    )
}