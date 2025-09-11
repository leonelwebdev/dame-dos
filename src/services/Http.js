const API_URI = import.meta.env.VITE_API_URI;

export const HttpGet = async (uri, token) => {
    try {
        const data = await fetch(`${API_URI}${uri}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const response = await data.json();
        // console.log(response);
        return response.data;

    } catch (error) {
        // console.log(error);
        return errorResponse(error.response);
    }
};

export const HttpPost = async (uri, payload = "", withToken = true, optionalHeaders = {}, token) => {
    try {
        const headers = withToken
            ? {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                ...optionalHeaders
            }
            : {
                "Content-Type": "application/json",
                "Accept": "application/json",
                ...optionalHeaders
            };

        const data = await fetch(`${API_URI}${uri}`, {
            method: "POST",
            body: payload,
            headers: headers
        });

        const response = await data.json();
        // console.log(response);
        return response;
    } catch (error) {
        // console.log(error);
        return errorResponse(error);
    }
};

export const HttpPut = async (uri, payload = "", token) => {
    try {
        const data = await fetch(`${API_URI}${uri}`, {
            method: "PUT",
            body: payload,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const response = await data.json();
        // console.log(response);
        return response;

    } catch (error) {
        // console.log(error);
        return errorResponse(error.response);
    }
};

export const HttpDelete = async (uri, token) => {
    try {
        const data = await fetch(`${API_URI}${uri}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'DELETE'
        });

        const response = await data.json();
        // console.log(response);
        return response.data;

    } catch (error) {
        // console.log(error);
        return errorResponse(error.response);
    }
};

const errorResponse = (message) => {
    return {
        data: [],
        status: 404,
        message: `Error en la conexión con el servidor : ${message}`,
        error: true,
    };
};
