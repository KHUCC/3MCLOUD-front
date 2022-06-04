import React, {useRef, useState} from 'react';
import * as s from './ImageListStyled';
import { SpinnerCircular } from 'spinners-react';

const ImageListPresenter = ({...props}) => {
    const ref = useRef();
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [targetImage, setTargetImage] = useState("");
    const { imageList, downloadFile } = props;
    const [target, setTarget] = useState('');
    const onMouseOverImage = (e, item) => {
        let newFileName = item.split('/');
        newFileName = newFileName[newFileName.length - 1];
        setX(e.target.getBoundingClientRect().x+130);
        setY(e.target.getBoundingClientRect().y);
        setTargetImage(e.target.src);
        setTarget(newFileName);
    }

    const onMoustOutImage = () => {
        setX(0);
        setY(0);
        setTargetImage("");
        setTarget('');
    }


    return (
        <>
            {x ? (
                <s.ImagePreview x={x} y={y}>
                    <img width={500} height={300} src={targetImage} />
                </s.ImagePreview>
            ) : null}
            <s.Wrapper>
                <s.Container>
                    <s.FileGroupTitle>내 디렉토리 - 이미지</s.FileGroupTitle>
                    <s.FileDescription>{target}</s.FileDescription>
                    <s.FileListContainer>
                        {props.isLoading ? (
                            <s.SpinnerArea>
                                <SpinnerCircular enabled={props.isLoading} size={100} color={'#6dc4db'} />
                            </s.SpinnerArea>
                        ) : (
                            <>
                                {imageList.length === 0 ? (
                                    <s.NoImageDescription>회원님의 클라우드에 이미지 파일이 존재하지 않습니다!</s.NoImageDescription>
                                ) : (
                                    imageList.map((item, index) => (
                                        <s.ImageContainer key = {index}>
                                            <img
                                                ref={ref}
                                                width={120}
                                                height={120}
                                                src={item}
                                                onMouseOver={(e) => onMouseOverImage(e,item)}
                                                onMouseLeave={onMoustOutImage}
                                                onDoubleClick={() => downloadFile(item)}
                                            ></img>
                                        </s.ImageContainer>
                                    ))
                                )}
                            </>
                        )}
                    </s.FileListContainer>
                </s.Container>
            </s.Wrapper>
        </>
    );
}

export default ImageListPresenter;