import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { PostCard } from "../../User/PostCard/PostCard";

export const GetOne = (id) =>{
    const {One} = useUserContext();
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);
    useEffect ( () => {
        const fetchOne = async () => {
           try {
               const onePosts = await One(id);

               if (onePosts.length == 0) {
                   setError(true);
               }
               else {
                   setPosts(onePosts);
               };
               
            }
            catch (error) {
                console.error(error);
        }

    };
        fetchOne();
    }, []);
    
    return (
        <div>
            
            {
                error && (<p className="w-3/4 rounded p-4 text-center text-black font-roboto bg-blue-200 select-none">
                    No se encontro ningun post 
                </p>)
            }
            <div>
                
                <PostCard  post={posts} />

            </div> 
        </div>
    );
};