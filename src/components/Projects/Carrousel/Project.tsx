<<<<<<< HEAD
import Link from "next/link"
import { useRouter } from "next/router"

export type ProjectProps = {
=======
type ProjectProps = {
>>>>>>> d2200a78eabc40fbe93663d7340e9b2b18eddea6
    id: string
    title: string
    description: string
    image: string
    repository: string
    visitPage: string
}

<<<<<<< HEAD
export function Project({ title, description, image, repository, visitPage, id }: ProjectProps) {
    const router = useRouter()


    function handleClick() {
        router.push(`/projetos/${id}`)
    }

=======
export function Project({ title, description, image, repository, visitPage, id}: ProjectProps) {
>>>>>>> d2200a78eabc40fbe93663d7340e9b2b18eddea6
    return (
        <article className="w-full h-96 shape p-4 flex items-center justify-center">
            <div className="w-4/5 flex">
                <div className="w-4/6 p-3 relative">
                    <h2 className="text-xl mb-1">{title}</h2>
                    <p className="font-light text-blueLight">{description}</p>

                    <div className="space-x-3 absolute bottom-12">
<<<<<<< HEAD
                        <a href={visitPage} className="degradeButton text-dark font-extrabold shadow-lg transition-colors mt-4 py-2 px-8 rounded-md">Visitar</a>
                        <a href={repository} className="bg-transparent font-extrabold hover:text-blueLight transition-colors border-2 border-secondary text-secondary mt-4 py-2 px-8 rounded-md">Repositório</a>
                        <button onClick={handleClick} type="button">Ir</button>
=======
                        <a href={visitPage}  className="degradeButton text-dark font-extrabold shadow-lg transition-colors mt-4 py-2 px-8 rounded-md">Visitar</a>
                        <a href={repository}  className="bg-transparent font-extrabold hover:text-blueLight transition-colors border-2 border-secondary text-secondary mt-4 py-2 px-8 rounded-md">Repositório</a>
>>>>>>> d2200a78eabc40fbe93663d7340e9b2b18eddea6
                    </div>
                </div>

                <div className={`w-4/6 h-64 bg-slate-500 rounded-md ${image} p-3 border border-secondary`}>
                </div>


            </div>
        </article>
    )
}