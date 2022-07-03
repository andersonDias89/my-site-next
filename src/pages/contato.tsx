import { Header } from "../components/Header"
import { FormContact } from "../components/Contato/FormContact";
import { useState } from "react";
import { SucessContact } from "../components/Contato/SucessContact";
import { TitleContact } from "../components/Contato/TitleContact";


export default function Contatos() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sucess, setSucess] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name, email, message);
    setName('');
    setEmail('');
    setMessage('');

    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    }).then(() => {
      console.log('Email enviado com sucesso!');
      setSucess(true);
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div>
      <Header />
      <main>

        <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center flex-wrap degrade">
          <div className="container flex justify-center items-center">
            <TitleContact />

            <div className="w-1/2 animation-transition-right">
              {sucess === false &&
                <FormContact
                  handleSubmit={handleSubmit}
                  setName={setName}
                  setEmail={setEmail}
                  setMessage={setMessage}
                  name={name}
                  email={email}
                  message={message}
                />
              }

              {sucess === true &&
                <SucessContact />
              }
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}



