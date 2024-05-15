import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const NavBar = () =>
{
    return (
        <AppBar
            position='fixed'
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    JournalApp
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
