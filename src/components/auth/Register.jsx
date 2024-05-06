import { Alert, Box, Button, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const Register = () => {

  const [msgError, setMsgError] = useState('')
  const [msgSuccess, setMsgSuccess]= useState('')


  const onSubmit = async (e) =>{
    e.preventDefault()

    const data = {
      name : e.target.name.value,
      lastName : e.target.lastName.value,
      phone : e.target.phone.value,
      email : e.target.email.value,
      password : e.target.password.value
    }


    try {
      const response = await axios.post('http://localhost:4000/user/register', data)
      setMsgSuccess('Register success')
    } catch (error) {
      console.log(error.response.data)
      setMsgError(error.response.data.message)
    }

   

    
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" width="100%" height="100vh" alignItems="center">

       {msgSuccess &&  <Alert severity="success">{msgSuccess}</Alert> }
      {msgError &&  <Alert severity="error">{msgError}</Alert> }

        <Box  onSubmit={onSubmit} component="form" display="flex" flexDirection="column" width="400px" gap="20px">
            <Typography variant="h4">
                Register
            </Typography>
            <TextField id="outlined-basic" label="Name" variant="outlined" name="name" />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" name="lastName" />
            <TextField id="outlined-basic" label="Phone" variant="outlined" name="phone" />
            <TextField id="outlined-basic" label="Email" variant="outlined" name="email"/>
            <TextField id="outlined-basic" label="Password" variant="outlined" name="password" type="password" />
            <Button type="submit" variant="contained">Register</Button>
            <NavLink to="/login">
              <Button fullWidth variant="contained" color="warning">Login</Button>
            </NavLink>
           
        </Box>
    </Box>
  )
}

export default Register