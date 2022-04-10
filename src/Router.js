import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Login from './views/login/Login';
export default ({}) => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};
