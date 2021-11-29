import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { PostCard } from "../../User/PostCard/PostCard";

export const AllFav = () => {

    const {allFav} = useUserContext();
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    useEffect ( () => {
        const fetchFav = async () => {
           try {
               const {data: allFavoritePosts} = await allFav();

               if (allFavoritePosts.length == 0) {
                   setError(true);
               }
               else {
                   setPosts(allFavoritePosts);
               };
               
            }
            catch (error) {
                console.error(error);
        }

    };
        fetchFav();
    }, []);



  
    
    return (
        <div className="flex flex-col justify-center items-center p-6">
            {
                error && (<p className="w-3/4 rounded p-4 text-center text-black font-roboto bg-blue-200 select-none">
                    No se encontró ningun post Favorito
                </p>)
            }
            
            {
                posts.map((post) => {
                    return  <PostCard key={post._id} post={post} />
                })
            }
    
        </div>
    
    );
};