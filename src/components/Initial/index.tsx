import { IlustrationHome } from "./IlustrationHome";
import { TitleHome } from "./TitleHome";

export function Initial() {
    return (
        <div className="w-full h-[calc(100vh-70px)] bg-home">
            <div className="container h-full flex lg:flex-col items-center justify-evenly lg:justify-center">
                <TitleHome/>
                <IlustrationHome/>
            </div>
        </div>
    )
}