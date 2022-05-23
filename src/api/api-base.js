import Axios from 'axios';
import {API_SERVER} from '../config/config';

export const baseApi = Axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
    },
});