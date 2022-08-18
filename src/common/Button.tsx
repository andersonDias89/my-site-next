import { ReactNode } from "react";

type ButtonProps = {
    onCLick?: () => void;
    icon: ReactNode;
    title: string;
    style: 'buttonPrimary' | 'buttonSecondary'
    type?: 'button' | 'submit' | 'reset'
}

export function Button({ title, style, onCLick, icon }: ButtonProps) {
    return (
        <>
        <button
            className={`${style} flex items-center justify-center gap-2 font-bold rounded-md px-[36px] py-[10px] xs:py-[14px] text-[20px] transition-colors`}
            onClick={() => { }}>
            <span>{icon}</span>
            <span>{title}</span>
        </button>
        </>
    )
}