import axios from 'axios'

const graphxios = {
    request: async (endpoint, query, options) => {
        if(typeof endpoint !== 'string') throw new Error('Endpoint must be a string');
        if(typeof query !== 'string') throw new Error('Query must be a string');
        if(typeof options !== 'undefined'){
            if(typeof options !== 'object') throw new Error('Options must be an object');
        }

        const body =  { 
            query: query, 
            variables: {}
        };
    
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const response = await axios.post(endpoint, body, options ? options : defaultOptions);
        return response;
    }
}

export default graphxios;