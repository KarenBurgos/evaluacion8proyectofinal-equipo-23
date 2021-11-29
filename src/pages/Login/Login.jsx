import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import iconUser from '../../assets/img/user-icon.png'

import { useUserContext } from '../../contexts/UserContext';

export default function Login() {
    const { login, token } = useUserContext();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);

    const onChange = (e, save) => {
        save(e.target.value);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const logged = await login(username, password);

        setError(!logged);
        setUsername("");
        setPassword("");
    }

    if (token) {
        console.log("Ya se loggea")
        return <Navigate replace to="/redirect" />
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-hero-pattern bg-no-repeat bg-cover">
            <main className="w-3/5 h-3/5 max-w-xl bg-gray-100 bg-opacity-75 rounded-md p-8 md:p-10 shadow-md">
                <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 items-center justify-center">
                    <h2 className="text-black font-monserrat font-black text-5xl mb-1">Inicio de sesión</h2>
                    <h3 className="text-black font-monserrattext-2xl mb-6">comparte tus mejores momentos</h3>

                    {error && <p className="w-full rounded p-3 text-center text-white font-roboto bg-red-700 select-none">
                        Un error ha ocurrido en el inicio de sesión
                    </p>}

                        <input className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded mb-2"
                            type='text'
                            value={username}
                            placeholder='e.g. username'
                            onChange={(e) => onChange(e, setUsername)}
                        />
                    

                    <input className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded mb-2"
                        type="password"
                        placeholder="e.g password"
                        onChange={(e) => onChange(e, setPassword)}
                        value={password}
                    />

                    <button className="mt-6 w-full transition rounded border border-primary duration-300 ease-in-out text-xl text-extrabold uppercase bg-primary hover:bg-primary-dark py-2 px-4 text-gray-100">Sign In </button>
                </form>
            </main>
        </div>
    );
}

/*<div className="flex flex-row">
                        <img className="w-12" src={iconUser} alt={iconUser} />
                        <input className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded mb-2"
                            type='text'
                            value={username}
                            placeholder='e.g. username'
                            onChange={(e) => onChange(e, setUsername)}
                        />
                    </div> */