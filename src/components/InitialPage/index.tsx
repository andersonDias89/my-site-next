import { SocialIcons } from "./SocialIcons";
import { TitleHome } from "./TitleHome";

export function InitialPage() {
    return (
        <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center flex-wrap degrade">
            <TitleHome />
            <SocialIcons />
        </div>
    )
}