import React, {useEffect, useCallback, useRef, useState} from 'react';
import AudioListPresenter from './AudioListPresenter';
import { useRecoilValue } from 'recoil';
import * as recoilItem from '../../utils/util';
import { fileApi } from '../../api/api';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';
const AudioListContainer = () => {
    const [audioList, setAudioList] = useState([]);
    const idToken = useRecoilValue(recoilItem.id_token);
    const userId = useRecoilValue(recoilItem.user_id);
    const [isLoading, setIsLoading] = useState(true);

    const downloadFile = async (fileName) => {
        let newFileName = fileName.split('/');
        newFileName = newFileName[fileName.length - 1];
        saveAs(fileName, newFileName);
    };

    const fetchData = async () => {
        let res = null;
        setIsLoading(true);
        try {
            res = await fileApi.getAudioList(userId, idToken);
        } catch (e) {
            if (e.code === 'ERR_BAD_RESPONSE') {
                alert('세션이 만료되어 로그아웃 되었습니다!');
                localStorage.clear();
                window.location.href = '/';
            }
        } finally {
            if (res && res.statusText === 'OK') {
                setAudioList(res.data.audio_files);
            }
            console.log(res);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <AudioListPresenter audioList={audioList} isLoading={isLoading} downloadFile={downloadFile} />;
};

export default AudioListContainer;