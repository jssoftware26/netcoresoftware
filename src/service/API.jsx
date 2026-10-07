import axios from "axios";

const api = axios.create({
    baseURL: "https://netcoreserver.onrender.com/api",
    withCredentials: true
});

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("NetCore_Token");
    
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use((response)=> response, async(error)=>{
    if(
        error.response?.status === 403 && !error.config._retry
    ){
        error.config._retry = true;
        const res = await api.post(
            "/refresh",
            {},
            {
                withCredentials: true
            }
        );

        localStorage.setItem("NetCore_Token", res.data.accessToken);
        error.config.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return api(error.config)
    }

    return Promise.reject(error);
})

export default api;