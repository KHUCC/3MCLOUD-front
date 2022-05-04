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
    flex: 7;
    border-bottom: 1px solid gray;
    overflow-y: scroll;

`;

export const FileDescription = styled.div`
    height: 30px;
    width: 100%;
    background-color: #6dc4db;
    display: flex;
`;
export const DescriptionCheckArea = styled.div`
    width: 50px;
    border-right: 2px solid white;
`;
export const DescriptionTitle = styled.div`
    flex: 5;
    border-right: 2px solid white;
`;
export const DescriptionFileSize = styled.div`
    flex: 1;
`;


export const File = styled.div`
    height: 30px;

    height: 30px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid gray;
`;


export const FileCheckArea = styled.div`
    width: 50px;
    border-right: 2px solid #6dc4db;
`;
export const FileTitle = styled.div`
    flex: 5;
    border-right: 2px solid #6dc4db;
`;
export const FileSize = styled.div`
    flex: 1;
`;
