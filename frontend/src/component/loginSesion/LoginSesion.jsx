import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, TextField ,Typography  } from '@mui/material';
import { Link } from 'react-router-dom';

const personIconCss =[
    {
        mt:"5px"
    }
]

const LoginSesion = () => {
  return (
    <Box component="form" sx={{display:"flex" , flexDirection:"column", justifyContent:"center",alignItems:"center" ,margin:"10px"}}>
    <PersonIcon fontSize='large' />
    <TextField
    id="email"
    label="email"
    variant='outlined'
    fullWidth
    sx={{mt:"10px"}}
    >

    </TextField >
    <TextField
    id="pasword"
    label="pasword"
    variant='outlined'
    fullWidth
    sx={{mt:"10px"}}
    >

    </TextField>
    <Button variant="contained" sx={{mt:"7px"}}zz>
        Iniciar sesion
    </Button>

    <Typography sx={{mt:"10px"}} component={Link}>
      <Link to="/register" >
        registrarse
      </Link>
    </Typography>

  
 
    </Box>
   
  )
}

export default LoginSesion