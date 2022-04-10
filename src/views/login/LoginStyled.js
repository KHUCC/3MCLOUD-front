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
    width: 50%;
    height: 50%;
    border: 2px solid #6dc4db;

    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const Logo = styled.div`
    font-size: 200%;
    font-weight: bolder;
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6dc4db;
    padding-top: 30px;
`;

export const LoginArea = styled.div`
    flex: 4;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.input`
    width: 65%;
    margin-top: 10px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #e2e2e2;
    color: #6dc4db;
    outline: none;
`;

export const LoginButton = styled.button`
    flex: 1;
    font-size: 100%;
    font-weight: bold;
    width: 65%;
    background-color: #6DC4DB;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-bottom: 20px;
    border: none;
    cursor: pointer;
`;

export const LoginStatus = styled.div`
    flex: 1;
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 30%;
    justify-content: center;
    align-items: center;
    align-self: center;
`;

export const RegisterArea = styled.div`
    flex: 1;
    width: 65%;
    align-self: center;
    text-align: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const RegisterQuestion = styled.h5`
    color: #e2e2e2;
    flex: 3;
    padding-right: 15px;
`;

export const ToRegister = styled.h5`
    color: #6dc4db;
    flex: 1;
    text-decoration: underline;
    cursor: pointer;
`;
