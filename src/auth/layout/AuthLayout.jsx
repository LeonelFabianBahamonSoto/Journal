import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = '' }) =>
{
    return (
        <Grid
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh", backgroundColor: 'primary.main', padding: 4 }} //Style extended
        >
            <Grid
                className='box-shadow' xs={ 12 } sm={ 10 } md={ 8 } sx={{ backgroundColor: '#F3F3F3', padding: 3, borderRadius: 2 }}
            >
                <Typography variant='h5' sx={{ fontWeight: 700, mb: 2.5 }}> { title } </Typography>

                { children }

            </Grid>
        </Grid>
    )
}
