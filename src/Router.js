import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Login from './views/login/Login';
import Regisiter from './views/register/Register';
import Main from './views/main/Main';
import Header from './components/Header';
export default ({}) => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/register" element={<Regisiter />}></Route>
            </Routes>
            <Header />
            <Routes>
                <Route path="/main" element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    );
};