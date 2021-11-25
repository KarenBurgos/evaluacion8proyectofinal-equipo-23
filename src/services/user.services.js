const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";

const services = {};

services.login = async (username, password) => {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    };

    return {};
};

services.verifyToken = async (token) => {
    const response = await fetch(`${BASE_URL}/auth/whoami`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        //////////////////////////////
        //console.log(data);
        //console.log(token);
        //////////////////////////////
        return data;
    };

    return {};
};

//funcion que trae todos los posts
services.getAllPost = async (token, limit = 10, page = 0) => {
    const response = await fetch(`${BASE_URL}/post/all?limit=${limit}&page=${page}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    };

    return {};
};

//funcion que se encarga de traer los post del admin
services.getMyPost = async (token, limit = 15, page = 0) => {
    const response = await fetch(`${BASE_URL}/post/owned?limit=${limit}&page=${page}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });


    if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
    };

    return {};
};

//funcion para que el admin suba un post
services.createPost = async (token, title, description, image) => {
    console.log("token:");
    console.log(token);
    const response = await fetch(`${BASE_URL}/post/create`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            description: description,
            image: image
        })
    });
    
    const data = await response.json();
    return data;
    //console.log(data);
};


export default services;