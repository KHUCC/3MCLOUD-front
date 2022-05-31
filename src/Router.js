import React, {useState} from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Login from './views/login/Login';
import Regisiter from './views/register/Register';
import SharedFileList from './views/sharedlist/SharedFileList';
import ImageList from './views/imagelist/ImageList';
import Main from './views/main/Main';
import Directory from './views/directory/Directory';
import { RouterDivision } from './RouterDivision';
import SearchContainer from './views/search/Search';
import * as u from './utils/util';
import { authApi } from './api/api';


export default ({}) => {
    const [NavVisible, setNavVisible] = useState(true);
    const idtoken = useRecoilValue(u.id_token);
    const onClickMenu = () => {
        console.log(idtoken);
        if(!idtoken) {
            setNavVisible(false);
        }
        setNavVisible(!NavVisible);
    }

    return (
        <BrowserRouter>
            <RouterDivision>
                <Sidebar NavVisible={NavVisible} setNavVisible={setNavVisible} onClickMenu={() => onClickMenu()} />
                <Header NavVisible={NavVisible} setNavVisible={setNavVisible} onClickMenu={onClickMenu} />
                <Routes>
                    <Route path="/images" element={<ImageList />}></Route>
                    <Route path="/directory" element={<Directory />}></Route>
                    <Route path="/search" element={<SearchContainer />}></Route>
                    <Route path="/" setNavVisible={setNavVisible} element={<Login />}></Route>
                    <Route path="/register" element={<Regisiter />}></Route>
                </Routes>
            </RouterDivision>
        </BrowserRouter>
    );
};
