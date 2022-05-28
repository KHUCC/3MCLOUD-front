import React, {useRef, useState} from 'react';
import * as s from './DirectoryStyled';
import {getFileType} from '../../utils/util';

const DirectoryPresenter = ({...props}) => {
    const ref = useRef();
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [targetImage, setTargetImage] = useState("");

    const onMouseOverImage = (e) => {

        setX(e.target.getBoundingClientRect().x+100);
        setY(e.target.getBoundingClientRect().y);
        setTargetImage(e.target.src);
        
    }

    const onMoustOutImage = () => {
        setX(0);
        setY(0);
        setTargetImage("");
    }

    const {fileList, folderList} = props;

    return (
        <>
            {x ? (
                <s.ImagePreview x={x} y={y}>
                    <img width={300} height={300} src={targetImage} />
                </s.ImagePreview>
            ) : null}
            <s.Wrapper>
                <s.Container>
                    <s.FileGroupTitle>내 디렉토리 - 이미지</s.FileGroupTitle>
                    <s.FileDescription>asdasdas</s.FileDescription>
                    <s.FileListContainer ref={props.dragRef} isDragging={props.isDragging} htmlFor="fileupload">
                        <input
                            type="file"
                            id="fileUpload"
                            style={{ display: 'none', width: '100%', height: '100%' }}
                            multiple={true}
                            onChange={props.onChangeFiles}
                        />
                        {folderList.length === 0 ? null : null}
                        {fileList.length === 0
                            ? null
                            : fileList.map((item, index) =>
                                  getFileType(item) === 'photo' ? (
                                    //   <s.ImageContainer>
                                    //       <img
                                    //           ref={ref}
                                    //           width={90}
                                    //           height={90}
                                    //           src={item}
                                    //           onMouseOver={onMouseOverImage}
                                    //           onMouseLeave={onMoustOutImage}
                                    //       ></img>
                                    //   </s.ImageContainer>
                                console.log(item)
                                  ) : null
                              )}
                        <s.ImageContainer>
                            <img
                                ref={ref}
                                width={90}
                                height={90}
                                src={require('./photo.jpg')}
                                onMouseOver={onMouseOverImage}
                                onMouseLeave={onMoustOutImage}
                            ></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img
                                ref={ref}
                                width={90}
                                height={90}
                                src={require('./photo.jpg')}
                                onMouseOver={onMouseOverImage}
                                onMouseLeave={onMoustOutImage}
                            ></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img
                                ref={ref}
                                width={90}
                                height={90}
                                src={require('./photo.jpg')}
                                onMouseOver={onMouseOverImage}
                                onMouseLeave={onMoustOutImage}
                            ></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>

                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                        <s.ImageContainer>
                            <img width={90} height={90} src={require('./photo.jpg')}></img>
                        </s.ImageContainer>
                    </s.FileListContainer>
                </s.Container>
            </s.Wrapper>
        </>
    );
}

export default DirectoryPresenter;