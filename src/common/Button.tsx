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
        <button
            className={`${style} flex items-center gap-2`}
            onClick={() => { }}>
            <span>{icon}</span>
            <span>{title}</span>
        </button>
    )
}