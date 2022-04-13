import React from 'react';
import * as s from './SidebarStyled';
import { IoPersonCircle } from 'react-icons/io5';
import { BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sidebar = ({NavVisible}) => {

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
                        <s.ProfileUserName>USER</s.ProfileUserName>
                        <s.ProfileUserDept>사용 가능 공간: 1.50 GB / 4.00GB</s.ProfileUserDept>
                    </s.ProfileBlock>

                    {/* 메뉴 영역 */}
                    <s.DropDownBlock>
                        <s.MenuItemHaveList>내 디렉토리</s.MenuItemHaveList>
                        <s.MenuItemHaveList>사진</s.MenuItemHaveList>
                        <s.MenuItemHaveList>오디오</s.MenuItemHaveList>
                        <s.MenuItemHaveList>공유받은 파일</s.MenuItemHaveList>
                        <s.MenuItemHaveList>파일 업로드</s.MenuItemHaveList>
                    </s.DropDownBlock>
                </s.SideBody>
            </s.DropDownMenuCorp>
        </>
    );
}

export default Sidebar;