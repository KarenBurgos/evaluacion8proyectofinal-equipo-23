import { useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";

export const Post = () => {
    const { post } = useUserContext();
    const [title, setTitle] = useState ("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState(false);

    const onChange = (e, save) => {
        save(e.target.value)
    }

    const postHandler = async (e) => {
        e.preventDefault();

        //esto es solo para verificar en consola, se puede eliminar
        console.log(title);
        console.log(description);
        console.log(image);

        //esto esta comentado por el momento para no hacer post de algo equivocado
        const posted = await post(title, description, image);
        setError(!posted);
        
        setTitle("");
        setDescription("");
        setImage("");
    }


    return (
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
    );
};