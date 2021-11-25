import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { PostCard } from "../../User/PostCard/PostCard";

export const AllPosts = () => {
    const limit = 10;
    const {allPost} = useUserContext();
    const [page, setPage] = useState(0);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);
    
    useEffect( () => {
        const fetchPost = async () => {
            try {
                const allPostedPosts = await allPost(limit, page);

                if(allPostedPosts.length == 0){ 
                    // console.log(`array vacio`)
                    // console.log(allPostedPosts);
                    setError(true);
                }
                else {
                    // console.log(`array lleno`)
                    // console.log(allPostedPosts);
                    setPosts(allPostedPosts);
                };
            }
            catch (error) {
                console.error(error);
            }
        };

        fetchPost();

    }, [page]);

    return (
        <div className="flex flex-col justify-center items-center p-6">
            {
                error && (<p className="w-3/4 rounded p-4 text-center text-black font-roboto bg-blue-200 select-none">
                    No se encontró ningun post
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