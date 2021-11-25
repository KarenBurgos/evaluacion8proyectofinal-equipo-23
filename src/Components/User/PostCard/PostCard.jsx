import React from "react";

//no se esta cargando correctamente
export const PostCard = ({ post }) => {
    // console.log("postcard:")
    // console.log(post);
    const { _id, title, description, image} = post;



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

        </div>
    );
};
