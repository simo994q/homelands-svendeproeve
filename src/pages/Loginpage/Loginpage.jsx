import React, { useState, useContext } from 'react'
import { Header } from '../../components/Header/Header'
import style from './Loginpage.module.scss'
import { UserContext } from '../../context/UserContextProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Loginpage = () => {

    const { user, setUser } = useContext(UserContext)

    const [name, setName] = useState()
    const [pass, setPass] = useState()

    const handleData = (data) => {
        console.log(data);
        if (data.status === 'Ok') {
            toast('Logget ind')
            setUser({ user: data.user, token: data.access_token, id: data.user_id })
        } else {
            toast('Brugernavn eller adgangskode er forkert')
        }
    }

    const handleLogin = () => {
        const body = new URLSearchParams()
        body.append('username', name)
        body.append('password', pass)

        const options = {
            method: 'POST',
            body: body
        }

        fetch('https://api.mediehuset.net/token', options)
            .then(res => res.json())
            .then(data => handleData(data))
    }

    return (
        <>
            <Header />

            <div className={style.wrapper}>

                <h1>???</h1>
                <h1 style={{ marginTop: '100px' }}>Login</h1>
                <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
                <form>
                    <input type="text" placeholder='Brugernavn' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="password" placeholder='Adgangskode' value={pass} onChange={(e) => setPass(e.target.value)} />
                    <div>
                        <input type="button" value="Login" onClick={() => handleLogin()} />
                        <input type="button" value="Annuller" onClick={() => { setName(''), setPass('') }} />
                    </div>
                </form>

            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </>
    )
}
