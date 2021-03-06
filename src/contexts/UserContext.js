import { data } from "autoprefixer";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import userService from './../services/user.services';

const UserContext = React.createContext();
const TOKEN_KEY = "token";
const getToken = () => localStorage.getItem(TOKEN_KEY);

export const UserProvider = (props) => {
    const [token, setToken] = useState(undefined);
    const [user, setUser] = useState(undefined);
    

    useEffect(() => {
        const verifyTokenAsync = async () => {
            const lsToken = getToken();

            if(lsToken) {
                const { username, role } = await userService.verifyToken(lsToken);
                if(username && role) {
                    setUser({ username, role });
                    setTokenAll(lsToken);
                };
            };
        };

        verifyTokenAsync();
    }, [token]);

    const setTokenAll = (token) => {
        localStorage.setItem(TOKEN_KEY, token);
        setToken(token);
    };

    const login = useCallback((username, password)=> {
        const loginAsync = async () => {
            let status = false;
            try {
                const { token: tokenRes } = await userService.login(username, password);

                if(tokenRes) {
                    setTokenAll(tokenRes);
                    status = true;
                };
            } 
            catch (error) {
                console.error(error);
                console.error("Error in login");
            } 
            finally {
                return status;
            }
        };

        return loginAsync();
    }, []);

    const logout = useCallback(() => {
        setUser(undefined);
        setTokenAll(undefined);
    }, []);

    //no se si se debe utilizar usecallback o no, solo segui la logica de login
    const posts = useCallback((title, description, image) => {
        let status = false;
        const postAsync = async () => {
            try {
                //token no ha cargado cuando se intenta correr
                //se opto por usar getToken(), el cual llama el valor del localstorage
                const {message: messageRes} = await userService.createPost(getToken(), title, description, image);

                if (messageRes) {
                    status = true;
                };
            }
            catch (error) {
                console.error(error);
                console.log("Error in post");
            }
            finally {
                return status;
            }
        };

        return postAsync();
    }, []);

    const edits = useCallback((title, description, image, _id) => {
        let status = false;
        const editAsync = async () => {
            try {
                //token no ha cargado cuando se intenta correr
                //se opto por usar getToken(), el cual llama el valor del localstorage
                const {message: messageRes} = await userService.editPost(getToken(), title, description, image, _id);

                if (messageRes) {
                    status = true;
                };
            }
            catch (error) {
                console.error(error);
                console.log("Error in edit");
            }
            finally {
                return status;
            }
        };

        return editAsync();
    }, []);

    //validaciones para traer todos los post o devolver error
    const allPost = useCallback( (limit, page) => {
        const allPostAsync = async () => {
            try {
                //token no ha cargado cuando se intenta correr
                //se opto por usar getToken(), el cual llama el valor del localstorage
                const {data, pages} = await userService.getAllPost(getToken(), limit, page);
                
                if (data) {
                    // console.log("userContext data:")
                    // console.log(data);
                    return {data, pages};
                };
            }
            catch (error) {
                console.log("data undefined");
                return data;
            }
        };

        return allPostAsync();
    }, []);
    
    //validaciones para traer los post del admin o devolver un error
    const myPost = useCallback( (limit, page) => {
        const myPostAsync = async () => {
            try {
                //token no ha cargado cuando se intenta correr
                //se opto por usar getToken(), el cual llama el valor del localstorage
                
                /////////////////
                const {data, pages} = await userService.getMyPost(getToken(), limit, page);
                if (data) {
                    // console.log("userContext data:")
                    // console.log(data);
                    return {data, pages};
                };
            }
            catch (error) {
                console.log("data undefined");
                return data;
            }
        };

        return myPostAsync();
    }, []);

    const allFav = () => {
        const allFavAsync = async () => {
            try {
                const data = await userService.getAllFav(getToken());

                if (data) {
                    console.log(data);
                    return data;
                };
            }
            catch (error) {
                console.log("data undefined");
                return data;
            }
        };
        return allFavAsync();
    };

    const One = (_id) => {
        const OneAsync = async () =>{
            try{
                const response = await userService.getOne(getToken(), _id);
    
                
                if (response) {
                    return response;
                };

            }
            catch (error) {
                console.log("post notfound");
                /*return response;*/
            }
        };
        return OneAsync();
    };

    const like = ((_id) => {
        const likeAsync = async () => {
            try {
                const response = await userService.giveAlike(getToken(),_id);
                //console.log(response);
                return response;
            }
            catch (error) {
                console.error(error);
                console.log("Error in post");
            }
        };

        return likeAsync();
    });

    const favorite = ((_id) => {
        const favAsync = async () => {
            try {
                const response = await userService.giveFav(getToken(),_id);
                // console.log(response);
                return response;
            }
            catch (error) {
                console.error(error);
                console.log("Error in post");
            }
        };

        return favAsync();
    });

    const comment = useCallback( (_id, description) => {
        const commentAsync = async () => {
            try {
                const response = await userService.addComment(getToken(), _id, description);
                
                if (response.ok) {
                    return response;
                };
            }
            catch (error) {
                console.log("data undefined");
                return data;
            }
        };
        return commentAsync();
    }, []);

    const activeApost = ( (_id) => {
        const activeAPostAsync = async () => {
            console.log("antes de context try");
            try {
                console.log("antes de context en try");
                //token no ha cargado cuando se intenta correr
                //se opto por usar getToken(), el cual llama el valor del localstorage
                const response = await userService.active(getToken(), _id);
                console.log(response);
                if (response.ok) {
                    // console.log("userContext data:")
                    // console.log(data);
                    return response;
                };
            }
            catch (error) {
                console.log("data undefined");
                return data;
            }
        };

        return activeAPostAsync();
    });

    const value = useMemo(()=> ({
        token: token,
        user: user,
        login: login,
        logout: logout,
        posts: posts,
        edits: edits,
        myPost: myPost,
        allPost: allPost,
        allFav: allFav,
        One: One,
        like: like,
        favorite: favorite,
        comment: comment,
        activeApost: activeApost
    }), [token, user, login, logout, posts, edits, myPost, allPost, allFav, One, like, favorite,comment, activeApost]);

    return <UserContext.Provider value={value} {...props} />;
};

export const useUserContext = () => {
    const context = React.useContext(UserContext);

    if (!context) {
        throw new Error("useUserContext() must be inside of UserProvider");
    }

    return context;
};