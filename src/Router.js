import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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



export default ({}) => {
    const [NavVisible, setNavVisible] = useState(true);
    const onClickMenu = () => {
        setNavVisible(!NavVisible);
    }
    return (
        <BrowserRouter>
            <RouterDivision>
                <Sidebar NavVisible={NavVisible} onClickMenu={() => onClickMenu()} />
                <Header onClickMenu={onClickMenu} />
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/shared" element={<SharedFileList />}></Route>
                    <Route path="/register" element={<Regisiter />}></Route>
                    <Route path = "/images" element = {<ImageList/>}></Route>
                    <Route path = "/directory" element = {<Directory/>}></Route>
                </Routes>

                <Routes>
                    <Route path="/main" element={<Main />}></Route>
                </Routes>
            </RouterDivision>
        </BrowserRouter>
    );
};
