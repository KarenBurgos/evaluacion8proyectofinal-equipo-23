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
        return data;
    };

    return {};
}

services.createPost = async (token, title, description, image) => {
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
    console.log(data);
};


export default services;