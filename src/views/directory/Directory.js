import React, {useEffect, useCallback, useRef, useState} from 'react';
import DirectoryPresenter from './DirectoryPresenter';
import * as recoilItem from '../../utils/util';
import { fileApi } from '../../api/api';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';

const DirectoryContainer = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState([]);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    // 각 선택했던 파일들의 고유값 id

    const access_token = useRecoilValue(recoilItem.access_token);
    const id_token = useRecoilValue(recoilItem.id_token);
    const user_id = useRecoilValue(recoilItem.user_id);
    const fileId = useRef(0);
    const {path} = location.state;
    const [filePath, setFilePath] = useState(path);
    const [fileList, setFileList] = useState([]);
    const [folderList, setFolderList] = useState([]);
    const fetchData = async() => {
        let res = null;
        
        try{
            res = await fileApi.getFileList(user_id, filePath, id_token);
        }
        catch(e){}
        finally{
            if(res && res.statusText === "OK"){
                setFileList(res.data.files);
                setFolderList(res.data.folders);
                setIsLoading(false);
            }
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    // 드래그 이벤트를 감지하는 ref 참조변수 (label 태그에 들어갈 예정)
    const dragRef = useRef(null);
    const handleDragIn = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDragOut = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();

        setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('drag');
        if (e.dataTransfer.files) {
        setIsDragging(true);
        }
    }, []);
    const onChangeFiles = useCallback(
        (e) => {
            let selectFiles = [];
            let tempFiles = files;
            if (e.type === 'drop') {
                selectFiles = e.dataTransfer.files;
            } else {
                selectFiles = e.target.files;
            }
            Array.from(selectFiles).forEach((file) => {
                tempFiles = [
                    ...tempFiles,
                    {
                        id: (fileId.current += 1),
                        object: file,
                    },
                ];
            });
            setFiles(tempFiles);
        },
        [files]
    );

    const handleDrop = useCallback(
        (e) => {
        e.preventDefault();
        e.stopPropagation();

        onChangeFiles(e);
        setIsDragging(false);
        },
        [onChangeFiles]
    );

    const initDragEvents = useCallback(() => {
        
        if (dragRef.current !== null) {
        dragRef.current.addEventListener("dragenter", handleDragIn);
        dragRef.current.addEventListener("dragleave", handleDragOut);
        dragRef.current.addEventListener("dragover", handleDragOver);
        dragRef.current.addEventListener("drop", handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

    const resetDragEvents = useCallback(() => {

        if (dragRef.current !== null) {
        dragRef.current.removeEventListener("dragenter", handleDragIn);
        dragRef.current.removeEventListener("dragleave", handleDragOut);
        dragRef.current.removeEventListener("dragover", handleDragOver);
        dragRef.current.removeEventListener("drop", handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);
    

    useEffect(() => {
        initDragEvents();
    
        return () => resetDragEvents();
    }, [initDragEvents, resetDragEvents]);


    const fileUpload = async() =>{

        if(files.length === 0) return;
        setIsLoading(true);
        let formData ={
            files: files,
            user_id: user_id,
            IdToken: id_token,
            file_path: filePath,
            compression: false,
            isAudio: false,
        }
        console.log(formData);
        let res = null;
        try{
            res = await fileApi.upload(formData);
        } catch(e){}
        finally{
            console.log(res);
            setFiles([]);
            fetchData();
        }
    };

    useEffect(() => {
        fileUpload();
    }, [files]);

    return (
        <DirectoryPresenter
            isDragging={isDragging}
            dragRef={dragRef}
            onChangeFiles={onChangeFiles}
            fileList={fileList}
            folderList={folderList}
            filePath={filePath}
            isLoading = {isLoading}
        />
    );
}

export default DirectoryContainer;