import React, {useState, useEffect} from 'react';
import MainPresenter from './MainPresenter';
import Dragdrop from '../../components/Dragdrop';
import { useRecoilValue } from 'recoil';
import * as recoilItem from '../../utils/util';
import { authApi } from '../../api/api';
const MainContainer = () => {
    const [files, setFiles] = useState([]);
    const token = useRecoilValue(recoilItem.id_token);
    const fetchData = async () => {
        let res = null;
        let formData = {
            token: token
        };
        try{
            res = await authApi.getUser(formData);
        } catch(e){}
        finally{
            console.log(res);
        }
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <>
            <MainPresenter 
                files= {files}
                setFiles = {setFiles}
            />
        </>
    );
}

export default MainContainer;