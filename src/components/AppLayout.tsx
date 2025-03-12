import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import MainHeader from './MainHeader'
import React, { useState } from 'react';

interface Props {
  setMode: React.Dispatch<React.SetStateAction<boolean>>
}

const AppLayout : React.FC<Props> = ({
  setMode
}) => {
    const location = useLocation();
    const [user, setUser] = useState<{} | null>(null)

    const isLoginPage = location.pathname === '/login';
    const isSignupPage = location.pathname === '/signup';
  return (
    <>
     {isLoginPage || isSignupPage ? <Header setMode={setMode} /> : <MainHeader setMode={setMode} user={user}/>}
     <Outlet context={{setUser}}/>
    </>
  )
}

export default AppLayout
