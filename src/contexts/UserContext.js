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

    const post = useCallback((title, description, image) => {
        const postAsync = async () => {
            let status = false;
            try {
                const {message: messageRes} = await userService.createPost(token, title, description, image);

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

    const value = useMemo(()=> ({
        token: token,
        user: user,
        login: login,
        logout: logout,
        post: post
    }), [token, user, login, logout, post]);

    return <UserContext.Provider value={value} {...props} />;
}

export const useUserContext = () => {
    const context = React.useContext(UserContext);

    if (!context) {
        throw new Error("useUserContext() must be inside of UserProvider");
    }

    return context;
}