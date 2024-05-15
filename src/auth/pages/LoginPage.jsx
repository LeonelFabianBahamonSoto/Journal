import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField } from '@mui/material'
import { Google, Login } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () =>
{
    return (
        <AuthLayout title='Login'>
            <form>
                <Grid container spacing={ 2 }>
                    <Grid item xs={ 12 } sm={12 } md={ 12 } sx={{ borderRadius: 2 }}>
                        <TextField
                            label='email' type='email' placeholder='correo@email.com'
                            variant='outlined' sx={{ backgroundColor: 'white' }} color="third" fullWidth
                        />
                    </Grid>

                    <Grid item xs={ 12 } sm={12 } md={ 12 } sx={{ borderRadius: 2 }}>
                        <TextField
                            label='contraseña' type='password' placeholder='contraseña'
                            variant='outlined' sx={{ backgroundColor: 'white', mb:2 }} color="third" fullWidth
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={ 2 }>
                    <Grid item xs={ 12 } sm={ 6 } >
                        <Button variant='contained' endIcon={ <Login /> } color='success' sx={{ borderRadius: 2 }} fullWidth>
                            Iniciar sesión
                        </Button>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 }>
                        <Button variant='contained' endIcon={ <Google /> } color='secondary' sx={{ borderRadius: 2 }} fullWidth>
                            Google
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end' sx={{ mt: 2.5 }}>
                    <Button color='third' component={ RouterLink } to='/auth/register'>
                        Crear una cuenta
                    </Button>
                </Grid>
            </form>
        </AuthLayout>
    )
}
