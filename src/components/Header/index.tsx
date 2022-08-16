import { NavBar } from "./NavBar";

export function Header() {
    return (
        <div className="bg-tertiary h-[70px] flex items-center justify-center">
            <div className="container flex justify-center">
                <NavBar />
            </div>
        </div>
    )
}