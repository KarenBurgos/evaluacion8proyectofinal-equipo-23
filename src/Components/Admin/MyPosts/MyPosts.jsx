import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { PostCard } from "../../User/PostCard/PostCard";
import { Button } from "../../User/Button/Button";

export const MyPosts = () => {
    const limit = 15;
    const {myPost} = useUserContext();
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(0);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);
    
    useEffect( () => {
        const fetchPost = async () => {
            try {
                const {data: myPostedPosts, pages} = await myPost(limit, page);

                if(myPostedPosts.length == 0){ 
                    // console.log(`array vacio`)
                    // console.log(myPostedPosts);
                    setError(true);
                }
                else {
                    // console.log(`array lleno`)
                    // console.log(myPostedPosts);
                    // console.log(pages);
                    setPosts(myPostedPosts);
                    setPages(pages);
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
                <Button name="Página siguiente" OnClick= {() => {nextPage}} />
            </div>

        </div>
    );
    
};