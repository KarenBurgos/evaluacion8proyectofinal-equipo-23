import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import  { ButtonActive } from "../Button/ButtonActive";
import { useUserContext } from "../../../contexts/UserContext";
import { Edit } from "./Edit";

//no se esta cargando correctamente
export const PostCard = ({ post }) => {
    // console.log("postcard:")
    // console.log(post);
    const [aComment, setDescription] = useState("");
    
    const [error, setError] = useState(false);
    const { edits, like, favorite, comment, activeApost } = useUserContext();
    const { user, _id, title, description, image, likes, comments } = post
    const [numLike, setNumLike] = useState(likes.length);
    const [isLiked, setIsLiked] = useState(false);

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

    const giveAlike = () => {
        like(_id);
        if(isLiked) setNumLike(numLike - 1);
	        else setNumLike(numLike + 1);
	    setIsLiked(!isLiked);
  
    }
     const giveAcomment = () => {

     }

    return (
        <div className="flex flex-col rounded gap-y-5 p-6 my-10 w-3/5 bg-secondary shadow-lg">
            <div className="font-semibold w-auto h-auto text-gray-700 bg-secondary focus:outline-none focus:ring focus:border-gray-600 p-2 rounded">
                <img src={image} alt={image} />
            </div>

            <div className="w-full h-auto text-gray-700 focus:outline-none px-3 ">
                <div>
                    <p className="text-3xl font-bold">{title}</p>
                    <p className="font-semibold mb-2">@{user.username}</p>
                </div>
            </div>
    
            <div className="w-full h-auto text-gray-700 bg-secondary focus:outline-none focus:ring focus:border-gray-600 pl-3 pb-3 rounded">
                {description}
            </div>
            
            <div className="flex md:flex-1 space-x-4 items-center justify-start mt-2">
                <Button name="Me gusta" type="submit" 
                    onSubmit= {() => { giveAlike() }}
                    />
                    <p>Me gustas: {numLike}</p>
                        
                <Button name="Favorito" type="submit" onSubmit={() => {favorite(_id)}}/>
                    
                <ButtonActive name="Ocultar" type="submit" onSubmit={() => {activeApost(_id)}}/>
            </div>
            <hr />
            <form onSubmit={postHandler} className="flex flex-row rounded gap-y-5 p-3 py-2 w-full bg-blue-50 justify-start items-center">
                    <input 
                        type="text" 
                        className="font-semibold w-full h-3/5 text-gray-700 bg-transparent focus:outline-none focus:ring focus:border-gray-600 p-3 rounded"
                        placeholder="Escribir comentario"
                        value={ aComment }
                        onChange={(e) => onChange(e, setDescription)}
                    />

                    <button className="transition rounded border border-primary duration-300 ease-in-out text-lg text-extrabold uppercase bg-primary hover:bg-primary-dark py-2 px-4 text-gray-100">
                        Comentar
                    </button>
            </form>
            
            <div>
                <div className="bg-white p-5">
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