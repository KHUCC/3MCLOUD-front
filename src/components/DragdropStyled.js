import styled from 'styled-components';

export const FileDraggingLabel =
    styled.label`
  /* background-color: ${(props) => (props.isDragging ? '#153d77' : '#153d77')}; */
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  color: ${(props) => (props.isDragging ? 'white' : '#153d77')};
  border: 1px solid #fcfcfc;
  background-color: ${(props) => (props.isDragging ? '#b3cbf0' : '#fafafa')};
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
`;

export const DragDropContainer = styled.div`
    flex: 10;
    /* border: 1px solid black; */
    display: flex;
`;
export const FileUploadArea = styled.div`
    flex: 5;
    height: 300px;
    display: flex;
`;

export const BlockArea = styled.div``;

export const FileListBlock = styled.div`
    padding: 1rem 1rem;
    justify-content: left;
    align-items: left;
    text-align: left;
    width: 100%;
    & > div {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        &::before {
            content: '● ';
        }
    }
`;
export const FileListArea = styled.div`
    display: flex;
    flex-direction: row;
    flex: 3;
`;
export const FileItemBlock = styled.div`
    border: 1px solid #fafafa;
    background-color: #fafafa;
    border-radius: 10px;
    width: 50px;
    font-size: 12px;
    text-overflow: ellipsis;
    display: inline-block;
`;
export const FileDeleteButton = styled.div`
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;
