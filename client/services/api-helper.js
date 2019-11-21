const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

const api = axios.create({
    baseURL: BASE_URL,
});

export const oneItem = async (id) => {
    const resp = await api.get(`/items/${id}`);
    return resp.data
}

export const allItem = async () => {
    const resp = await api.get(`/items`);
    return resp.data
}
