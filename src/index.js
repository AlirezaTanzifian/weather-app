import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import { config } from './plugin/antdConfig';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider theme={{ token: config }} direction="rtl">
    <App />
  </ConfigProvider>
);
