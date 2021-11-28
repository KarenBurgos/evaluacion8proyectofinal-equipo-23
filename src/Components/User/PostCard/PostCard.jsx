import React from "react";
import { Button } from "../Button/Button";
import { useUserContext } from "../../../contexts/UserContext";
import { Comments } from "./Comments";
import { Edit } from "./Edit";

//no se esta cargando correctamente
export const PostCard = ({ post }) => {
    // console.log("postcard:")
    // console.log(post);
    const { edits, like, favorite } = useUserContext();
    const { _id, title, description, image, likes} = post

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
            <div className="flex md:flex-1 space-x-4 items-center justify-evenly mt-2">
                <Button name="Like" type="submit" onSubmit= {() => {like(_id)}}/>
                <div>likes: {likes.length}</div>
                <Button name="Favorito" type="submit" onSubmit={() => {favorite(_id)}}/>
            </div>
            <div>
                <Comments />
            </div>
            <div>
                <Edit name="Editar el post" _id={_id} />
            </div>

        </div>
    );
};
