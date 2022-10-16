import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProtectedRoute from './containers/ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import {getAuthenticatedUser} from './containers/Helpers';

function App() {
  const isAuth = getAuthenticatedUser();
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          {/* <ProtectedRoute path='/' element={<Login/>}/>
          {isAuth ? <Route path='/dashboard' element={<Dashboard/>}/> : <Navigate replace to={'/'}/>} */}
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
