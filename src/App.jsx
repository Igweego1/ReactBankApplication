import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProtectedRoute from './containers/ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import {getAuthenticatedUser} from './containers/Helpers';
import Layout from './containers/Layout';

function App() {
  const isAuth = getAuthenticatedUser();
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
