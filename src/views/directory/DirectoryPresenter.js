import React, {useRef, useState} from 'react';
import * as s from './DirectoryStyled';
import {getFileType} from '../../utils/util';
import { BsFileEarmark, BsFolder } from 'react-icons/bs';
import { textLengthOverCut } from '../../utils/util';
import { SpinnerCircular } from 'spinners-react';

const DirectoryPresenter = ({...props}) => {
    const [target, setTarget] = useState('');
    const { fileList, folderList, filePath, isLoading, downloadFile, onChangeFiles, setFilePath } = props;

    const prevFolder = (path) => {
        let paths = path.split("/");
        if(paths.length == 1){
            return "";
        } else {
            let returnPath = "";
            paths.forEach((value, index) => {
                returnPath = returnPath + value + "/";
            })
            returnPath = returnPath.slice(0, -1);
            return returnPath;
        }
    }

    return (
        <>
            <s.Wrapper>
                <s.Container>
                    <s.FileListHeader>
                        <s.TitleDescription> 내 디렉토리</s.TitleDescription>
                        <s.UploadButtonArea>
                            <input type="file" id="fileUpload" style={{ display: 'none' }} multiple={true} onChange={onChangeFiles} />
                            <s.UploadButton htmlFor="fileUpload">파일 업로드</s.UploadButton>
                        </s.UploadButtonArea>
                    </s.FileListHeader>
                    <s.FileDescription>{'/' + (filePath === "" ? "" : filePath+"/") + target}</s.FileDescription>
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
                                {filePath !== '' ? (
                                    <s.FileContainer onDoubleClick = {() => setFilePath(prevFolder(filePath))}>
                                        <BsFolder size={90} /> <br />
                                        <s.FileName>../</s.FileName>
                                    </s.FileContainer>
                                ) : null}
                                {folderList
                                    ? folderList.map((item, index) => (
                                          <s.FileContainer
                                              key={index}
                                              onMouseOver={() => setTarget(item)}
                                              onMouseLeave={() => setTarget('')}
                                              onDoubleClick={() => setFilePath(filePath + item)}
                                          >
                                              <BsFolder size={90} /> <br />
                                              <s.FileName>{textLengthOverCut({ txt: item, len: 15, lastTxt: '...' })}</s.FileName>
                                          </s.FileContainer>
                                      ))
                                    : null}
                                {fileList
                                    ? fileList.map((item, index) => (
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
                                      ))
                                    : null}
                            </>
                        )}
                    </s.FileListContainer>
                </s.Container>
            </s.Wrapper>
        </>
    );
}

export default DirectoryPresenter;