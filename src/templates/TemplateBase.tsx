import { ReactNode } from 'react'

type TemplateBaseProps = {
    children: ReactNode
}

export function TemplateBase({ children }: TemplateBaseProps) {
    return (
        <>
            <header>
                aqui header
            </header>
            <main>
                {children}
            </main>
            <footer>
                aqui footer
            </footer>
        </>
    )
}