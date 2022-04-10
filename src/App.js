import React from 'react';
import { RecoilRoot } from 'recoil';
import Router from './Router';

const App = () => {
    return (
        <React.StrictMode>
            <RecoilRoot>
                <Router />
            </RecoilRoot>
        </React.StrictMode>
    );
};

export default App;
