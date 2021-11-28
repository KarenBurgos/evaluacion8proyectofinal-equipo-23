import React,{ useState } from 'react';
import { Button } from "../Button/Button";
import { useUserContext } from "../../../contexts/UserContext";

export const Comments = () => {
    const [comment, setcomment] = useState("");
    const [error, setError] = useState(false);
    
        const onChange = (e, save) => {
            save(e.target.value)
        }
    
    return (
        <form className="flex flex-row rounded gap-y-5 p-6 w-full bg-blue-50 justify-start items-center">
                    <input 
                        type="text" 
                        className="font-semibold w-full h-3/5 text-gray-700 bg-gray-200 focus:outline-none focus:ring focus:border-gray-600 p-3 rounded"
                        placeholder="Escribir comentario"
                        value={comment}
                        onChange={(e) => onChange(e, setcomment)}
                    />
                    <button className="transition rounded border border-pink-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-pink-500 hover:bg-pink-700 py-2 px-4 text-gray-100">
                        enviar
                    </button>
                    
            </form>

    )
}