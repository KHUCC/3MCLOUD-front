import React, {useEffect, useCallback, useRef, useState, Fragment} from 'react';
import DirectoryPresenter from './DirectoryPresenter';
import * as recoilItem from '../../utils/util';
import { fileApi } from '../../api/api';
import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import {saveAs} from 'file-saver'
import axios from 'axios';

const DirectoryContainer = () => {
    
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    // 각 선택했던 파일들의 고유값 id

    const access_token = useRecoilValue(recoilItem.access_token);
    const id_token = useRecoilValue(recoilItem.id_token);
    const user_id = useRecoilValue(recoilItem.user_id);
    const [filePath, setFilePath] = useState("");
    const [fileList, setFileList] = useState([]);
    const [folderList, setFolderList] = useState([]);

    const [selected, setSelected] = useState([]);

    const onClickFile = (idx) => {
        if(selected.find(element => element === idx) >=0){
            setSelected(selected.filter(element => element !== idx));
        }else{
            setSelected([...selected, idx]);
        }
    }

    const fetchData = async() => {
        if(!id_token) {
            navigate('/');
            return;
        }
        let res = null;
        setIsLoading(true);
        try{
            res = await fileApi.getFileList(user_id, filePath, id_token);
        }
        catch(e){
            if(e.code === "ERR_BAD_RESPONSE"){
                alert('세션이 만료되어 로그아웃 되었습니다!');
                localStorage.clear();
                window.location.href = '/';
            }
        }
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
    }, [filePath]);

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
        if (e.dataTransfer.files) {
        setIsDragging(true);
        }
    }, []);

    const onChangeFiles = useCallback(
        async (e) => {
            let selectFiles = [];
            let temp = [];
            if (e.type === 'drop') {
                selectFiles = e.dataTransfer.files;
            } else {
                selectFiles = e.target.files;
            }
             Array.from(selectFiles).forEach((file) => {
                temp.push(file);
             });
            setFiles(temp);
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
    
    const makeNewFolder = async() => {
        let foldername = new String;
        foldername = prompt('생성할 폴더 이름을 입력해주세요');
        if(!foldername) return;
        while(foldername === '' || foldername.search('/') >= 0){
            foldername = prompt('폴더 이름은 공백이거나 "/"가 들어갈 수 없습니다. 다시 입력해주세요');
        }
        let formData = {
            file_path: filePath === '' ? filePath + foldername +"/" : filePath+"/"+foldername + "/",
            IdToken: id_token,
            user_id: user_id
        }
        let res = null;
        try{
            res=  await fileApi.makeFolder(formData);
        } catch(e){}
        finally{
            fetchData();
        }
        fetchData();   
    }

    const fileUpload = async () => {

        let formData = new FormData();
        if(files.length ===0 ) return;
        files.forEach(file => {
            formData.append('files', file);
        });
        formData.append('user_id', user_id);
        formData.append('IdToken', id_token);
        formData.append('file_path', filePath === "" ? filePath : filePath + "/");
        formData.append('compression', 'false');
        formData.append('isAudio', 'false');
        formData.append('enctype', 'multipart/form-data');
        setIsLoading(true);
        let res = null;
        try{
            res = await fileApi.upload(formData);
        } catch(e){}
        finally{
            if(res && res.data.result === "Upload succeed"){
                fetchData();
            } else{
                alert('업로드에 실패하였습니다');
            }
            fetchData();
            setIsLoading(false);
        }
    };

    const deleteFile = async() => {
        if(window.confirm('정말로 삭제하시겠습니까?')){
            let fileNameList = [];
            selected.forEach(idx => {
                fileNameList.push(fileList[idx]);
            });
            let formData = {
                user_id: user_id,
                file_path: filePath === "" ? "" : filePath + "/",
                file_list: fileNameList,
                IdToken: id_token,
            }
            let res = null;
            setIsLoading(true);
            try{
                res = await fileApi.deleteFile(formData);
            } catch(e){
                if (e.code === 'ERR_BAD_RESPONSE') {
                    alert('세션이 만료되어 로그아웃 되었습니다!');
                    localStorage.clear();
                    window.location.href = '/';
                }
            } finally{
                if(res){
                    if(res.data.result === "Delete succeed"){
                        alert('삭제되었습니다');
                    } else{
                        alert('삭제에 실패하였습니다');
                    }
                } else{
                    alert('삭제에 실패하였습니다');
                }
                setSelected([]);
                fetchData();
                setIsLoading(false);
            }
        } return;
    }

    useEffect(() => {
        initDragEvents();
    
        return () => resetDragEvents();
    }, [initDragEvents, resetDragEvents]);


    useEffect(() => {
        fileUpload();
    }, [files]);    

    const downloadFile = async(fileName) => {
        let res = null;
        try{
            res = await fileApi.download(user_id, fileName, id_token);
        } catch(e){}
        finally{
            if(res && res.data.file){
                saveAs(res.data.file, res.data.file);
            }
        }
    }

    return (
        <DirectoryPresenter
            isDragging={isDragging}
            dragRef={dragRef}
            onChangeFiles={onChangeFiles}
            fileList={fileList}
            folderList={folderList}
            filePath={filePath}
            setFilePath={setFilePath}
            isLoading={isLoading}
            downloadFile={downloadFile}
            makeNewFolder={makeNewFolder}
            onClickFile={onClickFile}
            selected={selected}
            setSelected={setSelected}
            deleteFile={deleteFile}
        />
    );
}

export default DirectoryContainer;