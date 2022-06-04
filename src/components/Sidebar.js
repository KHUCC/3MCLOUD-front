import React, { useEffect } from 'react';
import * as s from './SidebarStyled';
import { IoPersonCircle } from 'react-icons/io5';
import { BiX } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as recoilItem from '../utils/util';
import { authApi } from '../api/api';
import {FiLogOut} from 'react-icons/fi';

const StyledLink = styled(Link)`
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: black;
    }
    width: 100%;
`;


const Sidebar = ({...props}) => {
    const {NavVisible, setNavVisible} = props;
    const userId = useRecoilValue(recoilItem.user_id);
    const idToken = useRecoilValue(recoilItem.id_token);
    const accessToken = useRecoilValue(recoilItem.access_token);
    const [updated, setUpdated] = useRecoilState(recoilItem.updated);

    const navigate = useNavigate();

    useEffect(() => {
        if(!userId && !idToken){
            setNavVisible(false);
        }
    }, [updated, NavVisible]);

    const onLogout = () => {
        try{
            localStorage.clear();
        } catch(e){}
        finally{
             setNavVisible(false);
             setUpdated(updated + 1);
             alert('로그아웃 되었습니다');
             window.location.href = '/';
        }
    }

    return idToken ? (
        <s.DropDownMenuCorp NavVisible={NavVisible}>
            <s.SideHeader>
                <s.LogoutArea>
                    <FiLogOut size={30} style={{ cursor: 'pointer' }} onClick={onLogout} />
                </s.LogoutArea>
                <s.SideMenuButton>
                    <BiX color="white" size="30" />
                </s.SideMenuButton>
            </s.SideHeader>
            <s.SideBody>
                {/* 유저 프로필 영역 */}
                <s.ProfileBlock>
                    <IoPersonCircle size="50" color="#1E2F68" />
                    <s.ProfileUserName>{userId}</s.ProfileUserName>
                    {/* <s.ProfileUserDept>사용 가능 공간: 1.50 GB / 4.00GB</s.ProfileUserDept> */}
                </s.ProfileBlock>

                {/* 메뉴 영역 */}
                <s.DropDownBlock>
                    <StyledLink
                        to="/directory"
                        state={{
                            path: '',
                        }}
                    >
                        <s.MenuItemHaveList>내 디렉토리</s.MenuItemHaveList>
                    </StyledLink>
                    <StyledLink to="/images">
                        <s.MenuItemHaveList>사진</s.MenuItemHaveList>
                    </StyledLink>
                    <StyledLink to="/audios">
                        <s.MenuItemHaveList>오디오</s.MenuItemHaveList>
                    </StyledLink>
                    <StyledLink to="/search" state={{ searchKeyword: '' }}>
                        <s.MenuItemHaveList>검색</s.MenuItemHaveList>
                    </StyledLink>
                </s.DropDownBlock>
            </s.SideBody>
        </s.DropDownMenuCorp>
    ) : null;
}

export default Sidebar;