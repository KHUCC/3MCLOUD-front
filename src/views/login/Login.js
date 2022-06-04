import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import LoginPresenter from './LoginPresenter';
import * as recoilItem from '../../utils/util';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../api/api';

const LoginContainer = ({...props}) => {
    const {setNavVisible} = props;
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [loginValid, setLoginValid] = useState(true);

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const [accessToken, setAccessToken] = useRecoilState(recoilItem.access_token);
    const [idToken, setIdToken] = useRecoilState(recoilItem.id_token);
    const [userId, setUserId] = useRecoilState(recoilItem.user_id);
    const [updated, setUpdated] = useRecoilState(recoilItem.updated);

    const navigate = useNavigate();

    const tokenCheck = async() => {
        let res = null;
        console.log(accessToken);
        try{
            res = await authApi.getUser(accessToken);
        } catch(e){}
        finally{
            if(res){
                if (res.data.username) {
                    navigate('/directory', {
                        state: {
                            path: '',
                        },
                    });
                }
            }
            
        }
    }

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
                alert('서버로부터 응답이 없거나 에러가 발생하였습니다');
                return;
            } finally {
                if(result.data){
                    if (result.data.result == 'OK') {
                        if (result.data.token !== '' && result.data.token !== null) {
                            console.log(result.data);
                            setAccessToken(result.data.AccessToken);
                            setIdToken(result.data.IdToken);
                            setUserId(id);
                            setLoginValid(true);
                            setUpdated(updated + 1);
                            navigate('/directory', { state: { path: '' } });
                        } else {
                            setLoginValid(false);
                        }
                    }
                }
                setLoginValid(false);
            }
        }
    };

    useEffect(() => {
        tokenCheck();
    }, []);
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
