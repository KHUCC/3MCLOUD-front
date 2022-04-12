import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    top: 0;
    width: 100%;
    position: fixed;
    height: 100px;
    background-color: #6dc4db;
    display: flex;
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const NavIconArea = styled.div`
    justify-content: center;
    flex: 1;
    display:flex;
    padding-left: 3%;
    padding-right: 3%;
    cursor: pointer;
`;

export const LogoArea = styled.div`
    flex: 8;
    display: flex;
    align-items: center;
`;
export const LogoAreaText = styled.div`
    font-weight: 900;
    font-size: 30px;
    color: #1E2F68;
`;

export const Right = styled.div`
    flex: 1;

    display: flex;
`;

export const UserLogoArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const SearchArea = styled.div`
    flex: 8;

    display:flex;
    align-items: center;
    justify-content: right;
`;

export const SearchInput = styled.input`
    height: 30px;
`;
