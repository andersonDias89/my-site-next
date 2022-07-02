import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillCheckCircle } from 'react-icons/ai'

export function SucessContact() {
    const router = useRouter();

    return (
        <div className="flex justify-start items-center w-full flex-col space-y-2  py-6 rounded-md">
            <div className="w-full flex flex-col items-center justify-center space-y-1">
                <div className='text-5xl text-blueLight'>
                    <AiFillCheckCircle />
                </div>
                <div className="w-2/3">
                    <h2 className="flex flex-col items-center justify-center">
                        <span className="text-xl -mb-2 block ">Mensagem recebida com</span>
                        <span className="text-7xl font-extrabold text-blueLight">sucesso!</span>
                    </h2>

                    <p className="text-lg text-center">
                        Obrigado pelo o seu contato.
                        Em breve estarei respondendo.
                    </p>

                    <div className='flex w-full items-center justify-center flex-col'>
                        <button
                            onClick={() => router.push('/')}
                            type="button"
                            className="degradeButton text-dark font-extrabold shadow-lg transition-colors mt-3 py-2 px-12 rounded-md">
                            Voltar para a home
                        </button>

                        <div className='text-sm mt-2 border-b-2 hover:text-blueLight transition-colors'>
                        <Link href={'/contato'}>
                            <a>Enviar outra mensagem</a>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}