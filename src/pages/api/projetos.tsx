import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuid } from 'uuid'

type Data = {
    id: string
    title: string
    description: string
    image: string
    visitPage: string
    repository: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    res.status(200).json([
        {
            id: uuid(),
            title: 'Desafio Naped',
            description: 'Projeto realizado para resolver um desafio da comunidade codelândia do Iuri Silva. É um blog com conteúdo voltado para o público "nerd".',
            image: "projeto-1",
            visitPage: "https://naped-desafio-ten.vercel.app",
            repository: "https://github.com/andersonDias89/naped"
        },

        {
            id: uuid(),
            title: 'Site Academia',
            description: 'Projeto criado para portfólio.Trata-se de um site para academia divulgando os seus serviços',
            image: "projeto-2",
            visitPage: "https://academia-projeto.web.app/",
            repository: "https://github.com/andersonDias89/academia-treino"
        },

        {
            id: uuid(),
            title: 'Projeto Rachi',
            description: 'Desafio proposto por Iuri Silva para desenvolver um web site da empresa Rachi',
            image: "projeto-3",
            visitPage: "https://projeto-rachi.web.app/",
            repository: "https://github.com/andersonDias89/rachi-desafio"
        },
    ])
}