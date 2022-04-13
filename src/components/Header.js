import React, {useState} from 'react';
import * as s from './HeaderStyled';
import {AiOutlineMenu} from 'react-icons/ai';
import { HiUserCircle } from 'react-icons/hi';
import {BiSearch} from 'react-icons/bi';

const Header = () => {
    const [navColor, setNavColor] = useState('#ffffff');
    const onMouseOverNav = () =>{
        setNavColor('#d5d3d3');
    }
    const onMouseOutNav = () => {
        setNavColor('#ffffff');
    }

    return (
        <s.Container>
            <s.Left>
                <s.NavIconArea onMouseOver={() => onMouseOverNav()} onMouseOut={() => onMouseOutNav()}>
                    <AiOutlineMenu size={50} cursor={'pointer'} color={navColor} />
                </s.NavIconArea>
                <s.LogoArea>
                    <s.LogoAreaText>3M CLOUD</s.LogoAreaText>
                </s.LogoArea>
            </s.Left>
            <s.Right>
                <s.SearchArea>
                    <s.SearchInput placeholder = "파일을 검색하세요" />
                </s.SearchArea>
                <s.UserLogoArea>
                    <HiUserCircle size={50} cursor={'pointer'} color={'#ffffff'} />
                </s.UserLogoArea>
                <s.WhiteSpace/>
            </s.Right>
        </s.Container>
    );
}
export default Header;