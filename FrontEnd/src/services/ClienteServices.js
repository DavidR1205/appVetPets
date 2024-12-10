import axios from 'axios';

const api_url = 'http://localhost:8085/clientes';

export const getAllClientes = async() => {
    const response = await axios.get(api_url);
    return response.data;
}