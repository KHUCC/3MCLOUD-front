import React, { useRef, useState } from 'react';
import * as s from './SearchStyled';
import { getFileType } from '../../utils/util';
import { AiOutlineFile } from 'react-icons/ai';
import { textLengthOverCut } from '../../utils/util';
import { SpinnerCircular } from 'spinners-react';
import { AiOutlineSearch } from 'react-icons/ai';


const SearchPresenter = ({ ...props }) => {
    const [target, setTarget] = useState('');
    const { fileList, folderList, filePath, isLoading, downloadFile, keyword, onChangeKeyword, fetchData} = props;
    return (
        <>
            <s.Wrapper>
                <s.Container>
                    <s.FileListHeader>
                        <s.TitleDescription> 파일 검색</s.TitleDescription>

                        <s.SearchArea>
                            <s.SearchInput value = {keyword} onChange = {onChangeKeyword} />
                            <AiOutlineSearch size = {30} color = {'#6dc4db'} style ={{cursor: 'pointer'}} onClick = {() =>fetchData()}/>
                        </s.SearchArea>
                    </s.FileListHeader>

                    <s.FileDescription>{target}</s.FileDescription>
                    <s.FileListContainer>
                        {isLoading ? (
                            <s.SpinnerArea>
                                <SpinnerCircular enabled={isLoading} size={100} color={'#6dc4db'} />
                            </s.SpinnerArea>
                        ) : (
                            <>
                                {fileList.length === 0 ? (
                                    keyword === "" ? <s.NoFileDescription>검색어를 입력해주세요</s.NoFileDescription> : <s.NoFileDescription>검색 결과가 존재하지 않습니다!</s.NoFileDescription> 
                                ) : (
                                    fileList.map((item, index) => (
                                        <s.FileContainer
                                            key={index}
                                            onDoubleClick={() => downloadFile(item.file_url)}
                                            onMouseOver={() => setTarget(item.file_name)}
                                            onMouseLeave={() => setTarget('')}
                                        >
                                            <AiOutlineFile size={90} />
                                            <br />
                                            <s.FileName>{textLengthOverCut({ txt: item.file_name, len: 13, lastTxt: '...' })}</s.FileName>
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

export default SearchPresenter;
