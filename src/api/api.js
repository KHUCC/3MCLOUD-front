import { baseApi } from "./api-base";
import axios from 'axios';

export const authApi = {
    getAuth: (Data) => baseApi.put('auth/register/', Data),
    register: (Data) => baseApi.post(`auth/register/`, Data),
    login: (Data) => baseApi.post(`auth/login/`, Data),
    getUser: (Data) => baseApi.post(`auth/user`, Data),
    // getAuth: (Data) => baseApi.put(`/auth/register`, Data),
    // register: (Data) => baseApi.post(`/auth/register`, Data),
    // login: (Data) => baseApi.post(`/user/setting`, Data),
};

export const fileApi = {
    getFileList: (user_id, path, token) => baseApi.get(`file/?user_id=${user_id}&file_path=${path}&IdToken=${token}`),
    getImageList: (user_id, token) => baseApi.get(`file/image?user_id=${user_id}&IdToken=${token}`),
    upload: (Data) => baseApi.post(`file/upload/`, Data)
    //getFileList: (user_id, file_path) => baseApi.get(`file/user_id?${user_id}&file_path?${file_path}`)
};