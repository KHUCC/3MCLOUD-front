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

`;


export const FileDescription = styled.div`
    height: 30px;
    width: 100%;
    background-color: #6dc4db;
    display: flex;
`;

export const ImageContainer = styled.span`
    width: 100px;
    height: 100px;
    padding: 5px;
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