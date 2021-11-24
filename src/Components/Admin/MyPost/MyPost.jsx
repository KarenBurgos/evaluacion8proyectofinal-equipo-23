import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";

export const MyPost = () => {
    const {MyPost} = useUserContext();
    const [page, setPage] = useState(0);

    /*
    useEffect( () => {
        const fetchPost = async () => {
            try {
                const response = await MyPost(limit, page);

                //mas que hacer todavia
            }
        }
    }, [page]);
    */
};