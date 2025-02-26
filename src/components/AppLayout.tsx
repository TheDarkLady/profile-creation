import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import MainHeader from './MainHeader'

const AppLayout = () => {
    const location = useLocation();

    const isLoginPage = location.pathname === '/login';
    const isSignupPage = location.pathname === '/signup';
  return (
    <>
     {isLoginPage || isSignupPage ? <Header /> : <MainHeader />}
     <Outlet />
    </>
  )
}

export default AppLayout
