import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export function SocialIcons() {
    return (
        <div className="w-full container flex justify-center">
            <div className="animation-transition-top z-50 flex space-x-4 text-4xl text-secondary">
                <a className="hover:-translate-y-1 transition-transform cursor-pointer">
                    <AiFillGithub />
                </a>
                <a className="hover:-translate-y-1 transition-transform cursor-pointer">
                    <AiFillLinkedin />
                </a>

                <a className="hover:-translate-y-1 transition-transform cursor-pointer">
                    <AiFillInstagram />
                </a>
            </div>
        </div>
    )
}