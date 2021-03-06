import Head from "next/head";
import { AboutMe } from "../components/AboutMe";
import { Header } from "../components/Header";

export default function Sobre() {
    return (
        <>
            <Head>
                <title>Anderson Dias | Sobre mim</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <AboutMe />
        </>
    )
}

