import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
/* import FormControlLabel from '@mui/material/FormControlLabel'; */
/* import Checkbox from '@mui/material/Checkbox'; */
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
/* import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; */
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://Forno.com/">
        Forno.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#409989',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://lilluna.com/wp-content/uploads/2022/05/french-bread4-resize-17.jpg)',
            /* backgroundRepeat: 'no-repeat', */
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} backgroundColor="#F4D88F" square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
                alt="FormoLogo"
                src="https://i.imgur.com/4zr4Azi.png"
                sx={{ width: 100, height: 100 }}
            />
           
            <Typography component="h1" variant="h5" align="center" >
              Comprá más rápido y sigue tu pedido.{<br />}
              ¡Todo en un mismo lugar!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                sx={{backgroundColor:"#ffffff"}}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nombre"
                name="name"
                autoComplete="nombre"
                autoFocus
              />
              <TextField
                sx={{backgroundColor:"#ffffff"}}
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="Apellido"
                name="lastname"
                autoComplete="apellido"
              />
              <TextField
                sx={{backgroundColor:"#ffffff"}}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
              <TextField
                sx={{backgroundColor:"#ffffff"}}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                sx={{backgroundColor:"#ffffff"}}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirmar Contraseña"
                type="password"
                id="cpassword"
                autoComplete="current-password"
              />
              {/* 
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Recuerdame"
                />
              */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Crear Cuenta
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* 
                    <Link href="#" variant="body2">
                      ¿Has olvidado tu contraseña?
                    </Link>
                  */}
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Tienes una cuenta, Ingresa aqui"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}