import React, {useState} from 'react';
import * as s from './HeaderStyled';
import {AiOutlineMenu} from 'react-icons/ai';
import { HiUserCircle } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Header = ({...props}) => {
    const navigator = useNavigate();
    const [navColor, setNavColor] = useState('#ffffff');
    const onMouseOverNav = () =>{
        setNavColor('#d5d3d3');
    }
    const onMouseOutNav = () => {
        setNavColor('#ffffff');
    }
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState ('');
    const onChangeKeyword = (e) => {
        setKeyword(e.target.value);
    }
    return (
        <s.Container>
            <s.Left>
                <s.NavIconArea onMouseOver={() => onMouseOverNav()} onMouseOut={() => onMouseOutNav()} onClick={() => props.onClickMenu()}>
                    <AiOutlineMenu size={50} cursor={'pointer'} color={navColor} />
                </s.NavIconArea>
                <s.LogoArea>
                    <s.LogoAreaText>3M CLOUD</s.LogoAreaText>
                </s.LogoArea>
            </s.Left>
            <s.Right>
                <s.SearchArea>
                    <s.SearchInput value = {keyword} onChange = {onChangeKeyword} placeholder="파일을 검색하세요" />
                </s.SearchArea>
                <s.UserLogoArea to="search" state = {{searchKeyword: keyword}}>
                    <AiOutlineSearch size={30} cursor={'pointer'} color={'#ffffff'} />
                </s.UserLogoArea>
                <s.WhiteSpace />
            </s.Right>
        </s.Container>
    );
}
export default Header;