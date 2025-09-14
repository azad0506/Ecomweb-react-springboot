import axios from "axios";

//export const API_BASE_URL="http://localhost:8485"
// export const API_BASE_URL="https://diligent-solace-production.up.railway.app"
export const API_BASE_URL = "https://dockerrenderrail-latest.onrender.com";



let jwt=localStorage.getItem("jwt");

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
    }
});
