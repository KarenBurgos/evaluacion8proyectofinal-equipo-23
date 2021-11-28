import React, { useState } from "react";
import { Button } from "../Button/Button";
import { useUserContext } from "../../../contexts/UserContext";
import { Edit } from "./Edit";

//no se esta cargando correctamente
export const PostCard = ({ post }) => {
    // console.log("postcard:")
    // console.log(post);
    const [aComment, setDescription] = useState("");
    const [error, setError] = useState(false);
    const { edits, like, favorite, comment } = useUserContext();
    const { _id, title, description, image, likes, comments } = post

    const onChange = (e, save) => {
        save(e.target.value)
    }

    const postHandler = async (e) => {
        e.preventDefault();

        //esto es solo para verificar en consola, se puede eliminar
        console.log(_id);
        console.log(aComment);

        //esto esta comentado por el momento para no hacer post de algo equivocado
        const makeAcomment = await comment(_id, aComment);
        setError(!makeAcomment);
        
        setDescription("");
    }
    
    return (
        <div className="flex flex-col rounded gap-y-5 p-6 my-10 w-3/5 bg-blue-50 shadow-lg">
            <div className="font-bold w-full h-auto text-gray-700 bg-gray-300 focus:outline-none focus:ring focus:border-gray-600 p-3 rounded">
                {title}
            </div>
            
            <div className="font-semibold w-full h-auto text-gray-700 bg-gray-200 focus:outline-none focus:ring focus:border-gray-600 p-3 rounded">
                {description}
            </div>
            
            <div className="font-semibold w-auto h-auto text-gray-700 bg-gray-200 focus:outline-none focus:ring focus:border-gray-600 p-3 rounded">
                <img src={image} alt={image} />
            </div>

            <div className="flex md:flex-1 space-x-4 items-center justify-start mt-2">
                <Button name="Like" type="submit" onSubmit= {() => {like(_id)}}/>
                <div>likes: {likes.length}</div>
                <Button name="Favorito" type="submit" onSubmit={() => {favorite(_id)}}/>
            </div>

            <form onSubmit={postHandler} className="flex flex-row rounded gap-y-5 p-6 w-full bg-blue-50 justify-start items-center">
                    <input 
                        type="text" 
                        className="font-semibold w-full h-3/5 text-gray-700 bg-gray-200 focus:outline-none focus:ring focus:border-gray-600 p-3 rounded"
                        placeholder="Escribir comentario"
                        value={ aComment }
                        onChange={(e) => onChange(e, setDescription)}
                    />

                    <button className="transition rounded border border-pink-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-pink-500 hover:bg-pink-700 py-2 px-4 text-gray-100">
                        Comentar
                    </button>
            </form>
            
            <div>
                <div>
                    <h5>{comments.length} comentarios</h5>
                    
                    <div>
                    {
                        comments.map((acomment) => {
                            return  (
                                <div className="flex"> 
                                    <p className="font-bold">{acomment.user.username}:</p>
                                    <p className="px-1">{acomment.description}</p>
                                </div>
                            )
                        })
                    }   
                    </div>
                </div>
            </div>
            <div>
                <Edit name="Editar el post" _id={_id} />
            </div>


        </div>
    );
};