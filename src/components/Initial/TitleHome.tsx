import { Button } from "../../common/Button";
import { Browsers, ChatCircleDots } from 'phosphor-react'

export function TitleHome() {
    return (
        <div className="flex flex-col">
            <h1 className="font-black text-[52px]">Anderson Dias</h1>
            <span className="tracking-widest -mt-3 text-[16px]">Desenvolvedor front-end | UX/UI Design</span>
            <div className="flex gap-4 mt-4">
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