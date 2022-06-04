import React, {useRef, useState} from 'react';
import * as s from './DirectoryStyled';
import {getFileType} from '../../utils/util';
import { BsFileEarmark, BsFolder } from 'react-icons/bs';
import { textLengthOverCut } from '../../utils/util';
import { SpinnerCircular } from 'spinners-react';
import { fileApi } from '../../api/api';

const DirectoryPresenter = ({...props}) => {
    const [target, setTarget] = useState('');
    const {
        fileList,
        folderList,
        filePath,
        isLoading,
        downloadFile,
        onChangeFiles,
        setFilePath,
        makeNewFolder,
        onClickFile,
        selected,
        setSelected,
        deleteFile,
    } = props;
    const prevFolder = (path) => {
        let paths = path.split("/");
        console.log(paths);
        if(paths.length == 1){
            return "";
        } else {
            let returnPath = "";
            for(var i =0; i<paths.length -1; i++){
                returnPath = returnPath + paths[i] + "/";
            }
            returnPath = returnPath.slice(0, -1);
            return returnPath;
        }
    }

    const nextFolder = (targetPath) => {
        if(filePath === '') return targetPath;
        else{
            return filePath + '/' + targetPath;
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
                            <s.UploadButton onClick={makeNewFolder}>폴더 생성</s.UploadButton>
                            {selected.length > 0 ? <s.UploadButton onClick={deleteFile}>삭제</s.UploadButton> : null}
                        </s.UploadButtonArea>
                    </s.FileListHeader>
                    <s.FileDescription>{'/' + (filePath === '' ? '' : filePath + '/') + target}</s.FileDescription>
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
                                    <s.FileContainer onDoubleClick={() => setFilePath(prevFolder(filePath))}>
                                        <BsFolder size={90} /> <br />
                                        <s.FileName>../</s.FileName>
                                    </s.FileContainer>
                                ) : null}
                                {folderList
                                    ? folderList.map((item, index) =>
                                          item === '' ? null : (
                                              <s.FileContainer
                                                  key={index}
                                                  onMouseOver={() => setTarget(item)}
                                                  onMouseLeave={() => setTarget('')}
                                                  onDoubleClick={() => {
                                                      setTarget('');
                                                      setFilePath(nextFolder(item));
                                                  }}
                                              >
                                                  <BsFolder size={90} /> <br />
                                                  <s.FileName>{textLengthOverCut({ txt: item, len: 13, lastTxt: '...' })}</s.FileName>
                                              </s.FileContainer>
                                          )
                                      )
                                    : null}
                                {fileList
                                    ? fileList.map((item, index) => (
                                          <s.FileContainer
                                              key={index}
                                              onDoubleClick={() => downloadFile(item)}
                                              onMouseOver={() => setTarget(item)}
                                              onMouseLeave={() => setTarget('')}
                                              onClick={() => onClickFile(index)}
                                              selected={selected.find((element) => element === index) >= 0 ? true : false}
                                          >
                                              <BsFileEarmark size={90} />
                                              <br />
                                              <s.FileName>{textLengthOverCut({ txt: item, len: 13, lastTxt: '...' })}</s.FileName>
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