import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import Login from './components/Login';
import Home from './container/Home';


const App = () => {
    useEffect(() => {
        const initClient = () => {
            gapi.auth2.init({
                clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
    return (
        <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='login' element={<Login />} />
        </Routes>
    )
}

export default App;