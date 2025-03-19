import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import MainHeader from './MainHeader'
import React, { useState } from 'react';
import {User} from "../types/Types"
interface Props {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>
}

const AppLayout : React.FC<Props> = ({
  mode ,setMode
}) => {
    const location = useLocation();
    const [user, setUser] = useState< User | null>(null)

    const isLoginPage = location.pathname === '/login';
    const isSignupPage = location.pathname === '/signup';
  return (
    <>
     {isLoginPage || isSignupPage ? <Header mode={mode} setMode={setMode} /> : <MainHeader mode={mode} setMode={setMode} user={user}/>}
     <Outlet context={{user ,setUser}}/>
    </>
  )
}

export default AppLayout
