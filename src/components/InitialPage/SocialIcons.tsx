import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export function SocialIcons() {
    return (
        <div className="w-full container flex justify-center">
            <div className="animation-transition-top z-50 flex space-x-4 text-4xl text-secondary">
                <Link href={'https://github.com/andersonDias89'}>
                    <a className="hover:-translate-y-1 transition-transform cursor-pointer">
                        <AiFillGithub />
                    </a>
                </Link>

                <Link href={'https://www.linkedin.com/in/anderson-dias-bb7b3122b/'}>
                    <a className="hover:-translate-y-1 transition-transform cursor-pointer">
                        <AiFillLinkedin />
                    </a>
                </Link>

                <Link href={'https://www.instagram.com/andersondias_dev'}>
                    <a className="hover:-translate-y-1 transition-transform cursor-pointer">
                        <AiFillInstagram />
                    </a>
                </Link>

            </div>
        </div>
    )
}