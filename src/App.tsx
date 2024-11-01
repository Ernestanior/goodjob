import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConfigProvider } from 'antd';
import Router from './router';
import Nav from './pages/home/part1';

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      {/* <Nav/> */}
        <Router/>
      
  </ConfigProvider>
  );
}

export default App;
