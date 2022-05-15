import React from 'react';
import * as s from './MainStyled';
import Dragdrop from '../../components/Dragdrop';

const MainPresenter = ({...props}) => {
    return (
        <>
            <s.Container>
                <Dragdrop setFiles = {props.setFiles}/>
            </s.Container>
        </>
    );
}

export default MainPresenter;