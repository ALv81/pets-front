import { Alert, Box, Button, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

const Login = () => {

  const [msgError, setMsgError] = useState('')

  const navigate = useNavigate()

  const onSubmit = async (e) =>{
   e.preventDefault()
    

   const data = {
    email : e.target.email.value,
    password : e.target.password.value
  }


  try {
    
    const response = await axios.post('http://localhost:4000/user/login', data)
    console.log(response)
    localStorage.setItem('user', response.data.user.name)
    navigate('/panel')
  } catch (error) {
    console.log(error)
    setMsgError("Credentials Invalid")
  }


  console.log(data)

  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" width="100%" height="100vh" alignItems="center">
      {msgError &&  <Alert severity="error">{msgError}</Alert> }
    <Box component="form" onSubmit={onSubmit} display="flex" flexDirection="column" width="400px" gap="20px">
        <Typography variant="h4">
            Login
        </Typography>
        <TextField id="outlined-basic" label="Email" variant="outlined" name="email" />
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password" />
        <Button variant="contained" type="submit">Login</Button>
        <NavLink to="/register">
          <Button fullWidth variant="contained" color="warning">Register</Button>
        </NavLink>
       
    </Box>
</Box>
  )
}

export default Login