import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    @media screen and (max-width: 768px) {
    }
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 90%;
    height: 70%;

    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const FileListHeader = styled.div`
    flex: 1;
    padding-top: 20px;
    display: flex;
    
    
`;

export const TitleDescription = styled.div`
    flex:1;
    text-align: left;
    font-size: 30px;
    color: #6dc4db;
    font-weight: bold;
`;

export const UploadButtonArea =styled.div`
    flex: 1;
    text-align: right;
`;

export const UploadButton = styled.label`
    width: 100%;
    height: 100%;
    background-color: #6dc4db;
    padding: 10px 10px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    &:hover{
        opacity: 0.7;
    }
    margin-left: 20px;
`;

export const SpinnerArea = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const FileListContainer = styled.div`
    margin-top: 10px;
    flex: 7;
    border-bottom: 1px solid gray;
    overflow-y: scroll;
    width: 100%;
    text-align: left;
    background-color: ${(props) => props.isDragging ? '#e2e2e2':'white'};
`;


export const FileDescription = styled.div`
    height: 30px;
    width: 100%;
    background-color: #6dc4db;
    display: flex;
    padding-left: 10px;
    padding-top: 10px;
`;

export const DescriptionDrop = styled.div`
    position: fixed;
    background-color: gray;
    opacity: 0.5;
    display: flex;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const DescriptionDropMessage = styled.div`
    color: white;
    font-size: 30px;
    font-weight: bolder;
`;

export const FileContainer = styled.span`
    width: 130px;
    height: 120px;
    margin: 10px;
    padding-top: 10px;
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    &:hover {
        background-color: #6dc4db;
        opacity: 0.5;
    }
    background-color: ${(props) => (props.selected ? '#e2e2e2' : null)};
    opacity: ${(props) => (props.selected ? 0.5 : 1)};
`;

export const FileName = styled.span`
    text-align: center;
    padding-left: 3px;
    width: 100%;
`;

export const FileIcon = styled.span`
    border: 1px solid gray;
`;

export const ImageTitle = styled.div`
    font-size: 10px;
`;

export const ImagePreview = styled.div`
    display: inline-block;
    background-color: black;
    left: ${(props) => props.x}px;
    top: ${(props) => props.y}px;
    position: fixed;
`;