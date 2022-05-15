import axios from 'axios';

export const API_URL = `http://localhost:8080/v1`;

export const fetchItems = ({restUrl, ...params}) => axios
    .get(`${API_URL}/${restUrl}`, {
        params: params,
    })
