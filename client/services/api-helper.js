const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

const api = axios.create({
    baseURL: BASE_URL,
});

//cart
export const getCart = async (shopper_id) => {
    const resp = await api.get(`/cart/${shopper_id}`)
}
//items
export const oneItem = async (id) => {
    const resp = await api.get(`/items/${id}`);
    return resp.data
};

export const allItem = async () => {
    const resp = await api.get(`/items`);
    return resp.data
};

//shoppers
export const registerShopper = async (registerData) => {
    const resp = await api.post('/shoppers', { shopper: registerData });
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.shopper;
};

export const loginShopper = async (logindata) => {
    const resp = await api.post('/auth/login/shoppers', { shopper: logindata });
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.shopper;
};

export const updateShopper = async (updateData, id) => {
    const resp = await api.put(`/shoppers/${id}`, updateData);
    return resp.data;
};

export const verifyShopper = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/auth/verify/shoppers');
        return resp.data;
    }
    return false;
};