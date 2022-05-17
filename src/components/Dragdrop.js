import React, { ChangeEvent, useCallback, useRef, useState, useEffect } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import * as s from './DragdropStyled';
import * as u from '../utils/util';

const Dragdrop = ({...props}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState([]);
    const trueData = true;
    const dragRef = useRef(null);
    const fileId = useRef(0);

    const onChangeFiles = useCallback((e) => {
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
    }, [files],
    );

    const handleFilterFile = useCallback(
        (id) => {
            setFiles(files.filter((file) => file.id !== id));
        },
        [files],
    )

    const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e)=> {
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

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles],
  );
    
  const initDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  useEffect(() => {
    props.setFiles(Array.from(files));
  }, [files]);

  return (
    <s.DragDropContainer>
      <s.FileUploadArea>
        <input type="file" id="fileUpload" style={{ display: 'none' }} multiple={trueData} onChange={onChangeFiles} />
        <s.FileDraggingLabel htmlFor="fileUpload" ref={dragRef} isDragging={isDragging}>
          <FiUploadCloud size="100" />
        </s.FileDraggingLabel>
      </s.FileUploadArea>
      <s.FileListArea>
        <s.FileListBlock>
          {files.length > 0 &&
            files.map((file) => {
              const {
                id,
                object: { name },
              } = file;

              return (
                <s.FileItemBlock key={id}>
                  {u.textLengthOverCut({ txt: name, len: 10, lastTxt: '...' })}
                  <s.FileDeleteButton onClick={() => handleFilterFile(id)}>
                    <AiOutlineDelete size="20" color="#153D77" />
                  </s.FileDeleteButton>
                </s.FileItemBlock>
              );
            })}
        </s.FileListBlock>
      </s.FileListArea>
    </s.DragDropContainer>
  );
};

export default Dragdrop;
