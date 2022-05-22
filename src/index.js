import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

const rootNode = document.getElementById('root');


ReactDOM.createRoot(rootNode).render(

    <RecoilRoot>
      <App/>
    </RecoilRoot>
);

