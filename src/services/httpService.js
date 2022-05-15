import axios from 'axios';

export const API_URL = `http://localhost:8080/v1`;

export const fetchItems = ({restUrl, ...params}) => axios
    .get(`${API_URL}/${restUrl}`, {
        params: params,
    })

export const updateItem = ({restUrl, id, data, ...params}) => axios
    .patch(`${API_URL}/${restUrl}/${id}`, {
        ...data
    }, {
        params: params,
    })
