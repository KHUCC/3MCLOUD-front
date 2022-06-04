import { baseApi, UploadApi } from "./api-base";
import axios from 'axios';

export const authApi = {
    getAuth: (Data) => baseApi.put('auth/register/', Data),
    register: (Data) => baseApi.post(`auth/register/`, Data),
    login: (Data) => baseApi.post(`auth/login/`, Data),
    getUser: (Data) => baseApi.get(`auth/user/?AccessToken=${Data}`)
    // getAuth: (Data) => baseApi.put(`/auth/register`, Data),
    // register: (Data) => baseApi.post(`/auth/register`, Data),
    // login: (Data) => baseApi.post(`/user/setting`, Data),
};

export const fileApi = {
    getFileList: (user_id, path, token) => baseApi.get(`file/?user_id=${user_id}&file_path=${path}&IdToken=${token}`),
    getImageList: (user_id, token) => baseApi.get(`file/image?user_id=${user_id}&IdToken=${token}`),
    getAudioList: (user_id, token) => baseApi.get(`file/audio?user_id=${user_id}&IdToken=${token}`),
    upload: (Data) => UploadApi.post(`file/upload/`, Data),
    // upload: (files, user_id, IdToken, file_path, compression, isAudio) => baseApi.post(`file/upload/?files=${files}&user_id=${user_id}&IdToken=${IdToken}&file_path=${file_path}&compression=${compression}&isAudio=${isAudio}`),
    download: (userId, fileName, token) => baseApi.get(`file/download/?user_id=${userId}&file_name=${fileName}&IdToken=${token}`),
    //getFileList: (user_id, file_path) => baseApi.get(`file/user_id?${user_id}&file_path?${file_path}`)
    search: (user_id, token, keyword) => baseApi.get(`file/search/?user_id=${user_id}&IdToken=${token}&keyword=${keyword}`),
    makeFolder: (Data) => baseApi.post(`file/makefolder/`, Data),
    deleteFile: (Data) => baseApi.post(`file/delete/`, Data),

};