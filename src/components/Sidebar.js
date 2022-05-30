import React from 'react';
import * as s from './SidebarStyled';
import { IoPersonCircle } from 'react-icons/io5';
import { BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import * as recoilItem from '../utils/util';
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;


const Sidebar = ({NavVisible}) => {
    const userId = useRecoilValue(recoilItem.user_id);

    return (
        <>
            <s.DropDownMenuCorp NavVisible={NavVisible}>
                <s.SideHeader>
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
                        <StyledLink to="/directory" state ={{
                            path: ''
                        }}>
                            <s.MenuItemHaveList>내 디렉토리</s.MenuItemHaveList>
                        </StyledLink>
                        <StyledLink to="/images">
                            <s.MenuItemHaveList>사진</s.MenuItemHaveList>
                        </StyledLink>
                        <s.MenuItemHaveList>오디오</s.MenuItemHaveList>
                        <StyledLink to="/shared">
                            <s.MenuItemHaveList>공유받은 파일</s.MenuItemHaveList>
                        </StyledLink>
                        <s.MenuItemHaveList>파일 업로드</s.MenuItemHaveList>
                    </s.DropDownBlock>
                </s.SideBody>
            </s.DropDownMenuCorp>
        </>
    );
}

export default Sidebar;