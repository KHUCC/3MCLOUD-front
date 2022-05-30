import React, { useEffect, useCallback, useRef, useState } from 'react';
import SearchPresenter from './SearchPresenter';
import * as recoilItem from '../../utils/util';
import { fileApi } from '../../api/api';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';
import { saveAs } from 'file-saver';

const SearchContainer = () => {
    
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    // 각 선택했던 파일들의 고유값 id
    const {searchKeyword} = location.state;

    const access_token = useRecoilValue(recoilItem.access_token);
    const id_token = useRecoilValue(recoilItem.id_token);
    const user_id = useRecoilValue(recoilItem.user_id);

    const [keyword, setKeyword] = useState(searchKeyword ? searchKeyword : "");
    const [fileList, setFileList] = useState([]);

    const fetchData = async () => {
        let res = null;
        if(keyword === "" ){
            setFileList([]);
            return;
        }
        setIsLoading(true);
        try {
            res = await fileApi.search(user_id, id_token, keyword)
        } catch (e) {
        } finally {
            if (res && res.statusText === 'OK') {
                console.log(res);
                setFileList(res.data.result_files);
                setIsLoading(false);
            }
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const onChangeKeyword =(e) => {
        setKeyword(e.target.value);
    }


    const downloadFile = async (fileName) => {
        let res = null;
        console.log('filename', fileName);
        try {
            res = await fileApi.download(user_id, fileName, id_token);
        } catch (e) {
        } finally {
            if (res && res.data.file) {
                saveAs(res.data.file, res.data.file);
            }
        }
    };

    return (
        <SearchPresenter
            fileList={fileList}
            isLoading={isLoading}
            downloadFile={downloadFile}
            keyword={keyword}
            onChangeKeyword={onChangeKeyword}
            fetchData={fetchData}
        />
    );
};

export default SearchContainer;
