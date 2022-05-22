import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './RegisterStyled';
const RegisterPresenter = ({ ...props }) => {
    return (
        <s.Wrapper>
            <s.Container>
                <s.Logo>회원가입</s.Logo>
                <s.RegisterArea>
                    <s.FormArea>
                        <s.InputArea
                            type="text"
                            placeholder="아이디"
                            value={props.id}
                            onChange={props.onChangeId}
                            readOnly={props.mailSend}
                        />
                        <s.ValidText>
                            {props.validIdLength ? '' : '아이디는 4글자 이상입니다'}
                            {/* {props.validIdExist ? '' : '이미 사용중인 아이디입니다'} */}
                        </s.ValidText>
                    </s.FormArea>
                    <s.FormArea>
                        <s.InputArea
                            type="password"
                            placeholder="비밀번호"
                            value={props.password}
                            onChange={props.onChangePassword}
                            readOnly={props.mailSend}
                        />
                        <s.ValidText>{props.validPasswordLength ? '' : '비밀번호는 8글자 이상입니다'}</s.ValidText>
                    </s.FormArea>
                    <s.FormArea>
                        <s.InputArea
                            type="password"
                            placeholder="비밀번호 확인"
                            value={props.passwordConfirm}
                            onChange={props.onChangePasswordConfirm}
                            readOnly={props.mailSend}
                        />
                        <s.ValidText>{props.validPasswordConfirm ? '' : '비밀번호와 비밀번호 확인이 일치하지 않습니다'}</s.ValidText>
                    </s.FormArea>
                    <s.FormArea>
                        <s.InputArea
                            type="text"
                            placeholder="이메일 주소"
                            value={props.email}
                            onChange={props.onChangeEmail}
                            readOnly={props.mailSend}
                        />
                        {props.email.length == 0 ? null : props.mailSend && props.emailValid ? (
                            <s.ValidText validEmail={props.validEmail} onClick={props.onClickAuthen}>
                                인증번호 재발급
                            </s.ValidText>
                        ) : (
                            <s.ValidText validEmail={props.validEmail} onClick={props.onClickAuthen}>
                                {!props.validEmail && props.email.length > 0 ? '이메일 형식을 확인해주세요' : `인증번호 ${props.mailSend ? '다시': ''} 받기`}
                            </s.ValidText>
                        )}
                    </s.FormArea>
                    {props.mailSend ? (
                        <s.FormArea>
                            <s.InputArea type="text" placeholder="인증 번호" value={props.authen} onChange={props.onChangeAuthen} />
                        </s.FormArea>
                    ) : null}
                </s.RegisterArea>
                <s.RegisterButton onClick={props.onSubmitRegister}>회원가입</s.RegisterButton>
                <s.LoginArea>
                    <Link to="/">
                        <s.ToLogin>로그인 페이지로 이동</s.ToLogin>
                    </Link>
                </s.LoginArea>
            </s.Container>
        </s.Wrapper>
    );
};

export default RegisterPresenter;
