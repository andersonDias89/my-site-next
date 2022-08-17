import { IlustrationHome } from "./IlustrationHome";
import { TitleHome } from "./TitleHome";

export function Initial() {
    return (
        <div className="w-full h-[calc(100vh-70px)] bg-home">
            <div className="container h-full flex items-center justify-evenly">
                <TitleHome/>
                <IlustrationHome/>
            </div>
        </div>
    )
}