import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { GetOne } from "./GetOne";

export const AllFav = () => {

    const {allFav} = useUserContext();
    const [id, setId] = useState([]);
    const [error, setError] = useState(false);

    useEffect ( () => {
        const fetchFav = async () => {
           try {
               const OneId = await allFav();

               if (OneId.length == 0) {
                   setError(true);
               }
               else {
                   setId(OneId);
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
            <h2 className="uppercase text-black font-monserrat font-black text-4xl text-center mt-10">Mis Favoritos</h2>
            {
                error && (<p className="w-3/4 rounded p-4 text-center text-black font-roboto bg-blue-200 select-none">
                    No se encontrĂ³ ningun post Favorito
                </p>)
            }

            {
                id.map((id) => {
                    return  <GetOne id={id} />
                })
            }
            
    
        </div>
    
    );
};

/*            
{
    posts.map((post) => {
        return  <PostCard key={post._id} post={post} />
    })
}
*/

// deberia de quedar mas o menos asi (sujeto a cambios)
/*
{
    posts.map((post) => {
        return <div>
            <onePost id={_id} />
        </div>
    })
}
*/