import React, {useEffect, useState} from 'react';
import * as s from './HeaderStyled';
import {AiOutlineMenu} from 'react-icons/ai';
import { HiUserCircle } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../api/api';
import { useRecoilValue } from 'recoil';
import * as recoilItem from '../utils/util';

const Header = ({...props}) => {
    const{NavVisible, setNavVisible} = props;
    const [navColor, setNavColor] = useState('#ffffff');
    const onMouseOverNav = () =>{
        setNavColor('#d5d3d3');
    }
    const onMouseOutNav = () => {
        setNavColor('#ffffff');
    }
    const [keyword, setKeyword] = useState ('');
    const onChangeKeyword = (e) => {
        setKeyword(e.target.value);
    }

    const userId = useRecoilValue(recoilItem.user_id);
    const idToken = useRecoilValue(recoilItem.id_token);
    const accessToken = useRecoilValue(recoilItem.access_token);
    const updated = useRecoilValue(recoilItem.updated);


    useEffect(() => {
        if(!idToken){
            setNavVisible(false);
        }
    }, [updated, NavVisible]);

    return (
        <s.Container>
            <s.Left>
              
                <s.NavIconArea
                    onMouseOver={() => onMouseOverNav()}
                    onMouseOut={() => onMouseOutNav()}
                    onClick={() => setNavVisible(!NavVisible)}
                >
                    <AiOutlineMenu size={50} cursor={'pointer'} color={navColor} />
                </s.NavIconArea>
            

                <s.LogoArea>
                    <s.LogoAreaText>3M CLOUD</s.LogoAreaText>
                </s.LogoArea>
            </s.Left>
            <s.Right>
                {idToken ? (
                    <>
                        <s.SearchArea>
                            <s.SearchInput value={keyword} onChange={onChangeKeyword} placeholder="파일을 검색하세요" />
                        </s.SearchArea>
                        <s.UserLogoArea to="search" state={{ searchKeyword: keyword }}>
                            <AiOutlineSearch size={30} cursor={'pointer'} color={'#ffffff'} />
                        </s.UserLogoArea>
                        <s.WhiteSpace />
                    </>
                ) : null}
            </s.Right>
        </s.Container>
    );
}
export default Header;