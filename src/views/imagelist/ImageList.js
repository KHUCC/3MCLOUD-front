import React, {useEffect, useCallback, useRef, useState} from 'react';
import ImageListPresenter from './ImageListPresenter';

const ImageListContainer = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState([]);
    // 각 선택했던 파일들의 고유값 id
    const fileId = useRef(0);

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
        // 앞서 말했던 4개의 이벤트에 Listener를 등록합니다. (마운트 될때)
        
        if (dragRef.current !== null) {
        dragRef.current.addEventListener("dragenter", handleDragIn);
        dragRef.current.addEventListener("dragleave", handleDragOut);
        dragRef.current.addEventListener("dragover", handleDragOver);
        dragRef.current.addEventListener("drop", handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

    const resetDragEvents = useCallback(() => {
        // 앞서 말했던 4개의 이벤트에 Listener를 삭제합니다. (언마운트 될때)
        
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
    console.log(files);
    return(
        <ImageListPresenter isDragging = {isDragging} dragRef = {dragRef} onChangeFiles = {onChangeFiles}/>
    )
}

export default ImageListContainer;