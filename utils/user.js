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

export const getUsers = async (query) => {
    let body =  { 
        query: `
        {
            search(query:"${query}"){
              username,
              photo,
            }
        }
        `, 
        variables: {}
    }

    let options = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await axios.post('http://localhost:3000/api/graphql',body, options)

    return response
}

export const getUser = async (username) => {
    let body =  { 
        query: `
        {
            user(username: "${username}"){
                fullname,
                username,
                photo,
                verified,
                followers{
                    followersUsername
                },
                following{
                    followingUsername
                }
            }
        }
        `, 
        variables: {}
    }

    let options = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await axios.post('http://localhost:3000/api/graphql',body, options)

    return response
}

export const addUser = async (fullname, username, email, password) => {
    let body =  { 
        query: `
        mutation{
            register(fullname:"${fullname}", username:"${username}",email:"${email}", password:"${password}"){
              user{
                fullname,
                username,
                email
              }
            }
        }
        `, 
        variables: {}
    }

    let options = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await axios.post('http://localhost:3000/api/graphql',body, options)

    return response
}

export const getDreamByUser = async (username) => {
    let body =  { 
        query: `
        {
            dreamsByUser(username:"${username}"){
                title,
                description,
                images,
                achieved            
            }
        }
        `, 
        variables: {}
    }

    let options = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await axios.post('http://localhost:3000/api/graphql',body, options)

    return response
}