import { useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";

export const Post = ({name}) => {
    const { posts } = useUserContext();
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
        const posted = await posts(title, description, image);
        setError(!posted);
        
        setTitle("");
        setDescription("");
        setImage("");
    }


    return (
        <form onSubmit={postHandler} className="flex flex-col rounded gap-y-5 p-10 w-3/5 bg-secondary shadow-lg">
            <h2 className="text-black font-monserrat font-black text-5xl text-center">{name}</h2>
            <h3 className="text-black font-monserrat text-center text-2x1 mb-5">Llenar los siguientes datos</h3>
            {
                error && (<p className="w-full rounded p-4 text-center text-white font-roboto bg-red-600 select-none">
                    Un error ha ocurrido en la creacion del post 
                </p>)
            }
            <input 
                type="text" 
                className="w-full text-gray-700 bg-white focus:outline-none focus:ring focus:border-gray-600 p-3 rounded"
                placeholder="titulo"
                value={title}
                onChange={(e) => onChange(e, setTitle)}
            />
            <input 
                type="text" 
                className="w-full h-32 text-gray-700 bg-white focus:outline-none focus:ring focus:border-gray-600 p-3 rounded"
                placeholder="descripción"
                value={description}
                onChange={(e) => onChange(e, setDescription)}
            />
            <input 
                type="text" 
                className="w-full text-gray-700 bg-white focus:outline-none focus:ring focus:border-gray-600 p-3 rounded"
                placeholder="url de la imagen"
                value={image}
                onChange={(e) => onChange(e, setImage)}
            />
            <button className="mt-6 mx-40 transition rounded border border-primary duration-300 ease-in-out text-lg text-extrabold uppercase bg-primary hover:bg-primary-dark py-2 px-4 text-gray-100">
                Post
            </button>
        </form>
    );
};