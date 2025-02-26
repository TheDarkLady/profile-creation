import { Container, Grid2 } from '@mui/material'
import Header from '../components/Header'
import loginImage from "../assets/Images/login-page.png"

const Login = () => {
  return (
    <div className='login-container'>
      <Header  />
      <div className='login-form-img-container'>

      <Grid2 container spacing={2} margin={{top:"30px"}}>
        <Grid2 size={{xs:12, md:6}}>

        </Grid2>
        <Grid2 size={{xs:12, md:6}} className='login-page-img'>
            <img src={loginImage} alt="" />
        </Grid2>
      </Grid2>
      </div>
    </div>
  )
}

export default Login

