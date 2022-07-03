import type { NextApiRequest, NextApiResponse } from 'next'
const nodeMailer = require('nodemailer');

export interface Email {
    name: string;
    email: string;
    message: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Email>
) {

    let trasport = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
        
    });

  trasport.sendMail({
    from: `"Contato" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: req.body.email,
    subject: 'Contato',
    text: `Nome: ${req.body.name} \nEmail: ${req.body.email} \nMensagem: ${req.body.message}`,
    html: `<p>Nome: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Mensagem: ${req.body.message}</p>`
    }).then(() => {
        res.status(200).json({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
    }).catch(error => {
        console.log(error);
    });

}

