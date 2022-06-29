import db from "../lib/firebase";
import { getDatabase, ref, set } from "firebase/database";
import { FormEvent, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid'
import { async } from "@firebase/util";



export default function Contato() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/andersondias89')
            .then(response => response.json())
            .then(user => setUser(user))
            
            console.log(user)
    }, [])

    



    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [user, setUser] = useState([])
    // // const [contacts, setContacts] = useState([])


    //  function handleSubmit(event: FormEvent) {
    //     event.preventDefault()

    //     const data = {
    //         name,
    //         email
    //     }

    //     setUser([
    //         ...user,
    //         {
    //             id: uuid(),
    //             name: data.name,
    //             email: data.email
    //         }
    //     ])

    //     console.log(user)


    //       set(ref(db, 'users'), {
    //        name: name,
    //         email: email,
    //       });
    // }



    // useEffect(() => {
    //     function writeUserData( id, name, email) {
    //         const db = getDatabase();
    //         set(ref(db, 'users/' + id), {
    //           name: name,
    //           email: email,
    //         });
    //       }
    // }, [user])


    return (
        // <form onSubmit={handleSubmit}>
        //     <input
        //         className="text-black"
        //         type="text"
        //         placeholder="nome"
        //         onChange={e => setName(e.target.value)}
        //         value={name}
        //     />
        //     <input
        //         className="text-black"
        //         type="text"
        //         placeholder="email"
        //         onChange={e => setEmail(e.target.value)}
        //         value={email}
        //     />
        //     <button type="submit">Enviar</button>
        // </form>
        <div>
            {user.map(item => {
                if(user) {
                    return (
                        <>
                         <span>{item.name}</span>
                         <span>{item.location}</span>
                        </>
                     )
                }
            })}
        </div>
    )
}