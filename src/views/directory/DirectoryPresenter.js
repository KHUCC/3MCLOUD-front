import React, {useRef, useState} from 'react';
import * as s from './DirectoryStyled';
import {getFileType} from '../../utils/util';
import { BsFileEarmark } from 'react-icons/bs';
import { textLengthOverCut } from '../../utils/util';
import { SpinnerCircular } from 'spinners-react';

const DirectoryPresenter = ({...props}) => {
    const ref = useRef();
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [targetImage, setTargetImage] = useState("");

    const [target, setTarget] = useState('');
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

    

    const { fileList, folderList, filePath, isLoading, downloadFile, onChangeFiles } = props;
    return (
        <>
            {x ? (
                <s.ImagePreview x={x} y={y}>
                    <img width={300} height={300} src={targetImage} />
                </s.ImagePreview>
            ) : null}
            <s.Wrapper>
                <s.Container>
                    <s.FileListHeader>
                        <s.TitleDescription> 내 디렉토리</s.TitleDescription>
                        <s.UploadButtonArea>
                            <input type="file" id="fileUpload" style={{ display: 'none' }} multiple={true} onChange={onChangeFiles} />
                            <s.UploadButton htmlFor="fileUpload">파일 업로드</s.UploadButton>
                        </s.UploadButtonArea>
                    </s.FileListHeader>
                    <s.FileDescription>{'/' + filePath + target}</s.FileDescription>
                    <s.FileListContainer ref={props.dragRef} isDragging={props.isDragging} htmlFor="fileupload">
                        {isLoading ? (
                            <s.SpinnerArea>
                                <SpinnerCircular enabled={isLoading} size={100} color={'#6dc4db'} />
                            </s.SpinnerArea>
                        ) : (
                            <>
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
                                    : fileList.map((item, index) => (
                                          <s.FileContainer
                                              key={index}
                                              onDoubleClick={() => downloadFile(item)}
                                              onMouseOver={() => setTarget(item)}
                                              onMouseLeave={() => setTarget('')}
                                          >
                                              <BsFileEarmark size={90} />
                                              <br />
                                              <s.FileName>{textLengthOverCut({ txt: item, len: 15, lastTxt: '...' })}</s.FileName>
                                          </s.FileContainer>
                                      ))}
                                {/* <s.FileContainer>
                                    <img
                                        ref={ref}
                                        width={90}
                                        height={90}
                                        src={require('./photo.jpg')}
                                        onMouseOver={onMouseOverImage}
                                        onMouseLeave={onMoustOutImage}
                                    ></img>
                                    <br /> <s.FileName>a</s.FileName>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img
                                        ref={ref}
                                        width={90}
                                        height={90}
                                        src={require('./photo.jpg')}
                                        onMouseOver={onMouseOverImage}
                                        onMouseLeave={onMoustOutImage}
                                    ></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img
                                        ref={ref}
                                        width={90}
                                        height={90}
                                        src={require('./photo.jpg')}
                                        onMouseOver={onMouseOverImage}
                                        onMouseLeave={onMoustOutImage}
                                    ></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>

                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer>
                                <s.FileContainer>
                                    <img width={90} height={90} src={require('./photo.jpg')}></img>
                                </s.FileContainer> */}
                            </>
                        )}
                    </s.FileListContainer>
                </s.Container>
            </s.Wrapper>
        </>
    );
}

export default DirectoryPresenter;