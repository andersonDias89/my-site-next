import { useRouter } from "next/router";
import { useState } from "react";


export function FormContact({ }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mensage, setMensage] = useState('');


    const router = useRouter();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(name, email, mensage);  

        setName('');
        setEmail('');
        setMensage('');

        fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                mensage
            })
        }).then(() => {
            console.log('Email enviado com sucesso!');   
        }).catch(error => {
            console.log(error);
        });
    }

    
    return (
        <form onSubmit={handleSubmit} className="flex justify-start items-center w-full flex-col space-y-2  py-6 rounded-md shape">
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
                        onChange={(e) => setMensage(e.target.value)}
                        value={mensage}
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
    )
}
