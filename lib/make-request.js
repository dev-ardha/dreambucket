import axios from 'axios'

export const get = async (req, endpoint) => {
    try {
        const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";
        const data = await axios.get(`${baseURL}${endpoint}`);
    
        return data
    } catch (error) {
        return error
    }
}