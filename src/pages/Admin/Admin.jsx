import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import ADMIN from '../../assets/img/soyadmin-img.jpg';
import { useState } from 'react';

export default function Admin() {
    const navigate = useNavigate();
    const { logout, post } = useUserContext();
    const [title, setTitle] = useState ("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState(false);

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }

    const onChange = (e, save) => {
        save(e.target.value)
    }

    const postHandler = (e) => {
        e.preventDefault();

        console.log(title);
        console.log(description);
        console.log(image);

        // const posted = post(title, description, image);
        // setError(!posted);
        
        setTitle("");
        setDescription("");
        setImage("");
    }

    return (
        <section>
            <header className="flex flex-row justify-end items-center">
                <button onClick={logoutHandler} className=" m-4 transition rounded border border-pink-500 duration-300 ease-in-out text-sm text-extrabold uppercase bg-pink-500 hover:bg-pink-700 py-2 px-4 text-gray-100">
                    Log out
                </button>
            </header>
            <div className="flex flex-col justify-around items-center p-6">
                <form onSubmit={postHandler} className="flex flex-col gap-y-5 p-6 w-3/5 bg-blue-50 shadow-lg">
                    <h2 className="uppercase text-black font-monserrat font-black text-4xl mb-5 text-center">Crear un post</h2>
                    {
                        error && (<p className="w-full rounded p-4 text-center text-white font-roboto bg-red-600 select-none">
                            Un error ha ocurrido en la creacion del post
                        </p>)
                    }
                    <input 
                        type="text" 
                        className="font-bold w-full text-gray-700 bg-gray-300 focus:outline-none focus:ring focus:border-gray-600 p-3 rounded"
                        placeholder="titulo"
                        value={title}
                        onChange={(e) => onChange(e, setTitle)}
                    />
                    <input 
                        type="text" 
                        className="font-semibold w-full h-32 text-gray-700 bg-gray-200 focus:outline-none focus:ring focus:border-gray-600 p-3 rounded"
                        placeholder="descripción"
                        value={description}
                        onChange={(e) => onChange(e, setDescription)}
                    />
                    <input 
                        type="text" 
                        className="font-semibold w-full text-gray-700 bg-gray-200 focus:outline-none focus:ring focus:border-gray-600 p-3 rounded"
                        placeholder="url de la imagen"
                        value={image}
                        onChange={(e) => onChange(e, setImage)}
                    />
                    <button className="mt-6 mx-40 transition rounded border border-pink-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-pink-500 hover:bg-pink-700 py-2 px-4 text-gray-100">
                        Post
                    </button>
                </form>
            </div>
                <div className="flex justify-center my-5">
                    <img className="w-1/3" src={ADMIN} />
                </div>
        </section>
    );
};
