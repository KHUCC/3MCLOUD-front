import React, {useRef, useState} from 'react';
import * as s from './AudioListStyled';
import { SpinnerCircular } from 'spinners-react';
import {BsFileEarmarkMusic} from 'react-icons/bs';
import { textLengthOverCut } from '../../utils/util';

const AudioListPresenter = ({ ...props }) => {
    const ref = useRef();
    const [targetImage, setTargetImage] = useState('');
    const { audioList, downloadFile } = props;
    const [target, setTarget] = useState('');
    const NameModify = (name) => {
        let names = name.split("/");
        return names[names.length - 1]
    }
    return (
        <>
            <s.Wrapper>
                <s.Container>
                    <s.FileGroupTitle>내 디렉토리 - 오디오</s.FileGroupTitle>
                    <s.FileDescription>{target}</s.FileDescription>
                    <s.FileListContainer>
                        {props.isLoading ? (
                            <s.SpinnerArea>
                                <SpinnerCircular enabled={props.isLoading} size={100} color={'#6dc4db'} />
                            </s.SpinnerArea>
                        ) : (
                            <>
                                {audioList.length === 0 ? (
                                    <s.NoFileDescription>회원님의 클라우드에 오디오 파일이 존재하지 않습니다!</s.NoFileDescription>
                                ) : (
                                    audioList.map((item, index) => (
                                        <s.FileContainer key={index} onMouseOver={() => setTarget(NameModify(item))} onMouseLeave={() => setTarget('')}>
                                            <BsFileEarmarkMusic size={90} onDoubleClick={() => downloadFile(item)} />
                                            <br />
                                            <s.FileName>{textLengthOverCut({ txt: NameModify(item), len: 13, lastTxt: '...' })}</s.FileName>
                                        </s.FileContainer>
                                    ))
                                )}
                            </>
                        )}
                    </s.FileListContainer>
                </s.Container>
            </s.Wrapper>
        </>
    );
};

export default AudioListPresenter;