import React, { useState, useEffect } from 'react';
import RegisterPresenter from './RegisterPresenter';


const RegisterContainer = ({}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState('');
    const [authen, setAuthen] = useState('');
    const [mailSend, setMailSend] = useState(false);
    const [success, setSuccess] = useState(false);

    const [validIdLength, setValidIdLength] = useState(false);
    const [validIdExist, setValidIdExist] = useState(false);
    const [validPasswordLength, setValidPasswordLength] = useState(false);
    const [validPasswordConfirm, setValidPasswordConfirm] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    //change Input
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangeAuthen = (e) => {
        setAuthen(e.target.value);
    }

    //validation id, password
    const checkIdLength = () => {
        1 <= id.length && id.length <= 3 ? setValidIdLength(false) : setValidIdLength(true);
    };
    const checkPasswordLength = () => {
        1 <= password.length && password.length <= 7 ? setValidPasswordLength(false) : setValidPasswordLength(true);
    };

    const checkPasswordConfirm = () => {
        password === passwordConfirm ? setValidPasswordConfirm(true) : setValidPasswordConfirm(false);
    };

    const checkEmail = () => {

        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(emailRegex.test(email)){
            setValidEmail(true);
        }
        else{
            setValidEmail(false);
        }
    };

    const onClickAuthen = () => {
        if(!validEmail) return;
        setMailSend(true);
    }

    const onSubmitRegister = async () => {
        if(!mailSend){
            alert('메일 인증번호를 받아주시길 바랍니다');
            return;
        }
        if(authen == ''){
            alert("메일 인증번호를 입력해주시길 바랍니다");
            return;
        }
        const registerForm = {
            user_id: id,
            user_pw: password,
        };
        if (id !== '' && password !== '' && passwordConfirm !== '') {
            if (!(validIdLength && validIdExist && validPasswordLength && validPasswordConfirm)) {
                return;
            } else {
                let result = null;
                try {
                    // result = await userApi.createUser(registerForm);
                } catch (e) {
                } finally {
                    if (result.status === 200) {
                        if (result.data === '') {
                            alert('실패하였습니다');
                            setId('');
                            setPassword('');
                            setPasswordConfirm('');
                            return;
                        }
                        alert('회원가입이 완료되었습니다');

                    } else {
                        alert('잘못된 접근입니다.');
                        setId('');
                        setPassword('');
                        setPasswordConfirm('');
                        return;
                    }
                }
            }
        } else {
            alert('빈 칸을 모두 채워주시길 바랍니다');
        }
    };


    //아이디 중복 검증
    useEffect(() => {
        if (id === '') {
            setValidIdExist(true);
            setValidIdLength(true);
        }
        const IdExists = async () => {
            let result = null;
            try {
                // result = await userApi.isExists(id);
            } catch (e) {
            } finally {
                if (!result) {
                    return;
                }
                result.data ? setValidIdExist(false) : setValidIdExist(true);
            }
        };

        checkIdLength();
        IdExists();
    }, [id]);
    // 패스워드 8글자 검증
    useEffect(() => {
        checkPasswordLength();
    }, [password]);

    // 패스워드, 패스워드 확인 일치 검증
    useEffect(() => {
        checkPasswordConfirm();
    }, [passwordConfirm, password]);

    useEffect(() => {
        checkEmail();
    }, [email]);
    return (
        <RegisterPresenter
            id={id}
            password={password}
            passwordConfirm={passwordConfirm}
            email={email}
            onChangeId={onChangeId}
            onChangePassword={onChangePassword}
            onChangePasswordConfirm={onChangePasswordConfirm}
            onChangeEmail={onChangeEmail}
            onChangeAuthen={onChangeAuthen}
            validIdExist={validIdExist}
            validIdLength={validIdLength}
            validPasswordLength={validPasswordLength}
            validPasswordConfirm={validPasswordConfirm}
            validEmail={validEmail}
            checkPasswordLength={checkPasswordLength}
            checkPasswordConfirm={checkPasswordConfirm}
            onSubmitRegister={onSubmitRegister}
            onClickAuthen={onClickAuthen}
            authen={authen}
            setAuthen={setAuthen}
            mailSend={mailSend}
            success={success}
        />
    );
};

export default RegisterContainer;
