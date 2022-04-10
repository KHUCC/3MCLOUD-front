import React from 'react';
import * as s from './LoginStyled';
import { Link } from 'react-router-dom';
const LoginPresenter = ({ ...props }) => {
    return (
        <s.Wrapper>
            <s.Container>
                <s.Logo>3M CLOUD</s.Logo>
                <s.LoginArea>
                    <s.InputArea type="text" placeholder="아이디" value={props.id} onChange={props.onChangeId} />
                    <s.InputArea type="password" placeholder="패스워드" value={props.password} onChange={props.onChangePassword} />
                </s.LoginArea>
                <s.LoginStatus>{props.loginValid ? '' : '아이디 혹은 비밀번호가 일치하지 않습니다'}</s.LoginStatus>
                <s.LoginButton onClick={props.onSubmitLogin}>로그인</s.LoginButton>

                <s.RegisterArea>
                    <s.RegisterQuestion>계정이 없으신가요?</s.RegisterQuestion>
                    <Link to="/register">
                        <s.ToRegister>회원가입</s.ToRegister>
                    </Link>
                </s.RegisterArea>
            </s.Container>
        </s.Wrapper>
    );
};

export default LoginPresenter;
