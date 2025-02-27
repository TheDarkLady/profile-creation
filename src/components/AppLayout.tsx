import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import MainHeader from './MainHeader'
import React from 'react';

interface Props {
  setMode: React.Dispatch<React.SetStateAction<boolean>>
}

const AppLayout : React.FC<Props> = ({
  setMode
}) => {
    const location = useLocation();

    const isLoginPage = location.pathname === '/login';
    const isSignupPage = location.pathname === '/signup';
  return (
    <>
     {isLoginPage || isSignupPage ? <Header setMode={setMode} /> : <MainHeader setMode={setMode}/>}
     <Outlet />
    </>
  )
}

export default AppLayout
