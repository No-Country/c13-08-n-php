import React from 'react'
import { Hidden } from '@mui/material'
import './Bienvenida.css'
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Paper, Box, TextField } from '@mui/material'


const Bienvenida = () => {
  return (
  <>
     <Hidden only={['xl', 'lg', 'md', 'sm']}>
        <div className='bienvenida'>
            <h2>¡Hola! Te damos la bienvenida </h2>
            <h1> ¿Qué vas a llevar hoy?</h1>
        </div>
        <div>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}  square>
        <Box component="form" noValidate sx={{ mt: 1 }}>

              
              <TextField 
                InputProps={{
                    startAdornment: <SearchIcon position="start" />,
                    

                }}

                sx={{backgroundColor:"#ffffff"}}
                margin="normal"
                required
                fullWidth
                id="name"                
                name="name"                
                autoFocus
              />

                

               
        </Box>
        </Grid>

            
          







        </div>
       
    
    </Hidden>
  
  </>
    
  )
}

export default Bienvenida
