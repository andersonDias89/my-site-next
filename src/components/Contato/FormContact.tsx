import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SucessContact } from "./SucessContact";

interface ContactProps {
    name: string;
    email: string;
    message: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


export function FormContact({
    name,
    email,
    message,
    setName,
    setEmail,
    setMessage,
    handleSubmit
}: ContactProps) {

    function isHandleSubimit(e: React.FormEvent<HTMLFormElement>) {
        handleSubmit(e)
    }

    return (
        <div>
            <form onSubmit={isHandleSubimit} className="flex justify-start items-center w-full flex-col space-y-2  py-6 rounded-md shape">
                <div className="w-4/5 space-y-1">
                    <label className="text-sm" htmlFor="name">Nome:</label>
                    <div className="w-full">
                        <input
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            name="name"
                            placeholder="digite o seu nome"
                            className="w-full rounded-lg p-2 outline-0 bg-dark placeholder-gray-700"
                        />
                    </div>
                </div>

                <div className="w-4/5 space-y-1">
                    <label className="text-sm" htmlFor="email">E-mail:</label>
                    <div className="w-full">
                        <input
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            name="email"
                            placeholder="digite o seu e-mail"
                            className="w-full rounded-lg p-2 outline-0 bg-dark placeholder-gray-700 "
                        />
                    </div>
                </div>

                <div className="w-4/5 space-y-1">
                    <label className="text-sm" htmlFor="email">Digite sua mensagem:</label>
                    <div className="w-full h-40">
                        <textarea
                            required
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            name="message"
                            className="w-full rounded-lg p-2 outline-0 bg-dark placeholder-gray-700 resize-none h-full"
                        />
                    </div>
                </div>

                <div className="flex w-4/5 justify-start">
                    <button
                        type="submit"
                        className="degradeButton text-dark font-extrabold shadow-lg transition-colors mt-3 py-2 px-12 rounded-md">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}
