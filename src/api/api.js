import { baseApi } from "./api-base";

export const authApi = {
    getAuth: (Data) => baseApi.put(`/auth/register`, Data),
    register: (Data) => baseApi.post(`/auth/register`, Data),
    login: (Data) => baseApi.post(`/user/setting`, Data),
}