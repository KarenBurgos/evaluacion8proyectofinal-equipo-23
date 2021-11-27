import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { PostCard } from "../../User/PostCard/PostCard";
import { Button } from "../Button/Button";

export const AllPosts = () => {
    const limit = 10;
    const {allPost} = useUserContext();
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(0);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);
    
    useEffect( () => {
        const fetchPost = async () => {
            try {
                const {data: allPostedPosts, pages} = await allPost(limit, page);

                if(allPostedPosts.length == 0){ 
                    // console.log(`array vacio`)
                    // console.log(allPostedPosts);
                    setError(true);
                }
                else {
                    // console.log(`array lleno`)
                    // console.log(allPostedPosts);
                    // console.log(pages);
                    setPosts(allPostedPosts);
                    setPages(pages)
                };
            }
            catch (error) {
                console.error(error);
            }
        };

        fetchPost();

    }, [page]);

        const previousPage = () => {
        // console.log(`pagina actual:  ${page}`);
        if (page !== 0) {
            setPage((pageNumber) => pageNumber-1);
            // console.log(`pagina resultante:  ${page}`);
            // console.log(`pagina resultante alt:  ${page-1}`);
        }
        // else {
        //     console.log("no se cambio de pagina")
        // }
    };

    const nextPage = () => {
        // console.log(`pagina actual:  ${page}`);
        if (page+1 < pages) {
            setPage((pageNumber) => pageNumber+1);
            // console.log(`pagina resultante:  ${page}`);
            // console.log(`pagina resultante alt:  ${page+1}`);
        }
        // else {
        //     console.log("no se cambio de pagina")
        // }
    };

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

            <div className="flex flex-row justify-center items-center">
                <Button name="Página anterior" type="submit" onSubmit={previousPage} />
                <div className="mt-6 mx-40 transition rounded border border-pink-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-pink-500 hover:bg-pink-700 py-2 px-4 text-gray-100">
                    {page}
                </div>
                <Button name="Página siguiente" type="submit" onSubmit={nextPage} />
            </div>
        </div>
    );
    
};