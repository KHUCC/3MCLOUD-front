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

export const FileGroupTitle = styled.div`
    flex: 1;
    border-bottom: 2px solid #6dc4db;
    padding-top: 20px;
    text-align: left;
    font-size: 30px;
    color: #6dc4db;
    font-weight: bold;
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

export const NoFileDescription = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #6dc4db;
    font-weight: bold;
`;

export const FileDescription = styled.div`
    height: 30px;
    width: 100%;
    background-color: #6dc4db;
    display: flex;
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
export const SpinnerArea = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const DescriptionDropMessage = styled.div`
    color: white;
    font-size: 30px;
    font-weight: bolder;
`;
export const ImageWrap = styled.span`
    display: inline;
`;
export const FileContainer = styled.span`
    width: 130px;
    height: 130px;
    padding-top: 10px;
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    margin: 10px 10px;
    &:hover {
        background-color: #6dc4db;
        opacity: 0.5;
    }
`;

export const fileDescription = styled.span`

`
export const FileName = styled.span`
    text-align: center;
    padding-left: 3px;
    width: 100%;
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