import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import Box from '@mui/material/Box';

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';

export const RegisterPage = () =>
{
    return (
        <AuthLayout title='Crear cuenta'>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } sm={ 12 } md={ 12 }>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <PersonIcon color='action' sx={{ mr: 1 }}/>
                        <TextField variant='filled' label='Nombre completo' fullWidth/>
                    </Box>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 12 }>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <EmailIcon color='action' sx={{ mr: 1 }}/>
                        <TextField variant='filled' label='Correo electrónico' fullWidth/>
                    </Box>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 12 }>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <PasswordIcon color='action' sx={{ mr: 1 }}/>
                        <TextField variant='filled' label='Contraseña' fullWidth/>
                    </Box>
                </Grid>

                <Grid container justifyContent='center' sx={{ mt: 2.5 }}>
                    <Button variant="contained" component={ RouterLink } to='/auth/register' sx={{ width: '50%' }}>
                        Crear una cuenta
                    </Button>
                </Grid>

                <Grid
                    container
                    spacing={ 2 }
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mt: '1.5%' }}
                >
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 }>
                        <Button color="third" startIcon={ <AccountBoxIcon /> } fullWidth>Ya tienes cuenta?</Button>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 }>
                        <Button color="third" startIcon={ <LoginIcon /> } component={ RouterLink } to='/auth/login' fullWidth>Ingresar</Button>
                    </Grid>
                </Grid>
            </Grid>
        </AuthLayout>
    )
}
