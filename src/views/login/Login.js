import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import LoginPresenter from './LoginPresenter';
import * as recoilItem from '../../utils/util';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../api/api';

const LoginContainer = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [loginValid, setLoginValid] = useState(true);

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const [token, setToken] = useRecoilState(recoilItem.access_token);
    const navigate = useNavigate();

    const onSubmitLogin = async () => {
        let loginForm = {
            username: id,
            password: password,
        };
        let result = null;
        if (id === '' || password === '') {
            alert('빈 칸을 채워주시길 바랍니다.');
        } else {
            try {
                result = await authApi.login(loginForm);
            } catch (e) {
            } finally {
                if (result.data.result == "OK") {
                    if (result.data.token !== '' && result.data.token !== null) {
                        setToken(result.data.token);
                        setLoginValid(true);
                        navigate('/');
                    } else {
                        setLoginValid(false);
                    }
                } else {
                    setLoginValid(false);
                }
            }
        }
    };

    return (
        <LoginPresenter
            id={id}
            password={password}
            onChangeId={onChangeId}
            onChangePassword={onChangePassword}
            onSubmitLogin={onSubmitLogin}
            loginValid={loginValid}
        />
    );
};

export default LoginContainer;
