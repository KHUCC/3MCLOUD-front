import React, { useState, useEffect } from 'react';
import { authApi } from '../../api/api';
import RegisterPresenter from './RegisterPresenter';
import { useNavigate } from 'react-router-dom';

const RegisterContainer = ({}) => {
    const navigate = useNavigate();
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
        0 <= id.length && id.length <= 3 ? setValidIdLength(false) : setValidIdLength(true);
    };
    const checkPasswordLength = () => {
        0 <= password.length && password.length <= 7 ? setValidPasswordLength(false) : setValidPasswordLength(true);
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

    const onClickAuthen = async() => {

        if(!validEmail || !validIdLength || !validPasswordLength || !validPasswordConfirm) return;
        const form = {
            username: id,
            password: password,
            email: email
        };
        let res = null;
        try{
            setMailSend(true);
            res = await authApi.getAuth(form);
        } catch(e){
            alert('????????? ?????????????????????. ????????? ??????????????????')
        }
        finally{
            if(res){
                if(res.data.result == "OK"){
                    alert('?????? ??????????????? ?????????????????????. ????????? ??????????????????');
                } else{
                    alert('???????????? ?????? ???????????????. ?????? ??????????????????');
                    setMailSend(false);
                }
            }
        }
        
    }

    const onSubmitRegister = async () => {
        if(!mailSend){
            alert('?????? ??????????????? ??????????????? ????????????');
            return;
        }
        if(authen == ''){
            alert("?????? ??????????????? ?????????????????? ????????????");
            return;
        }
        const registerForm = {
            username: id,
            password: password,
            email: email,
            confirmcode: authen,
        };
        if (id !== '' && password !== '' && passwordConfirm !== '') {
            if (!(validIdLength && validPasswordLength && validPasswordConfirm)) {
                return;
            } else {
                let res = null;
                try {
                    res = await authApi.register(registerForm);
                } catch (e) {
                    alert('????????? ?????????????????????. ????????? ??????????????????');
                } finally {
                    if (res.data.result === "OK") {
                        setId('');
                        setPassword('');
                        setPasswordConfirm('');
                        setAuthen('');
                        setMailSend(false);
                        setEmail('');
                        alert('??????????????? ?????????????????????');
                        navigate('/');

                    } else {
                        alert('????????? ??????????????? ??????????????????');
                        return;
                    }
                }
            }
        } else {
            alert('??? ?????? ?????? ??????????????? ????????????');
            
        }
    };


    // //????????? ?????? ??????
    // useEffect(() => {
    //     if (id === '') {
    //         setValidIdExist(true);
    //         setValidIdLength(true);
    //     }
    //     const IdExists = async () => {
    //         let result = null;
    //         try {
    //             // result = await userApi.isExists(id);
    //         } catch (e) {
    //         } finally {
    //             if (!result) {
    //                 return;
    //             }
    //             result.data ? setValidIdExist(false) : setValidIdExist(true);
    //         }
    //     };

    //     checkIdLength();
    //     IdExists();
    // }, [id]);
    // ???????????? 8?????? ??????
    useEffect(() => {
        checkIdLength();

    }, [id]);

    useEffect(() => {
        checkPasswordLength();
    }, [password]);

    // ????????????, ???????????? ?????? ?????? ??????
    useEffect(() => {
        checkPasswordConfirm();
    }, [passwordConfirm, password]);

    //????????? ????????? ??????
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
