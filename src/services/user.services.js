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

services.giveAlike = async (token, _id) => {
    console.log("token:");
    console.log(token);
    console.log(_id);

    const response = await fetch(`${BASE_URL}/post/like/${_id}`, {
        
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log("prueba2");

    if(response.ok){
        console.log("prueba");
        const data = await response.json();
        
        return data;
    }
    return {};
};

export default services;

/*giveAlike = async ( ) => {

    const response = await fetch(`https://posts-pw2021.herokuapp.com/api/v1/post/like/61a2f323b4de66b9753cc935`, {
        
        method: "PATCH",
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThjNTIwNjRjZmQ3MDRhZTMzN2Q1ZGYiLCJpYXQiOjE2Mzc5Nzk5NzcsImV4cCI6MTYzOTE4OTU3N30.pyLUWTERAm_HbjvKS8GBWuh7nlXLCUgxbe25xfSD7DM`
        }
    });

    if(response.ok){
        console.log("prueba");
        const data = await response.json();
        
        return data;
    }
    return {};
};*/

/*prueba = async ( ) => {

    const response = await fetch(`https://posts-pw2021.herokuapp.com/api/v1/post/all?limit=10&page=0`, {
        
        method: "GET",
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThjNTIwNjRjZmQ3MDRhZTMzN2Q1ZGYiLCJpYXQiOjE2Mzc5Nzk5NzcsImV4cCI6MTYzOTE4OTU3N30.pyLUWTERAm_HbjvKS8GBWuh7nlXLCUgxbe25xfSD7DM`
        }
    });

    if(response.ok){
        console.log("prueba");
        const data = await response.json();
        
        return data;
    }
    return {};
}*/