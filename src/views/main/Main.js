import React, {useState} from 'react';
import MainPresenter from './MainPresenter';
import Dragdrop from '../../components/Dragdrop';

const MainContainer = () => {
    const [files, setFiles] = useState([]);

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