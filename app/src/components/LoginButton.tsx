import { IconButton } from '@mui/material';
import * as React from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/More';
import { loginGoogleAuth } from '../FirebaseConnection';

export default function LoginButton(prop: {mobileMenuID: string}){
    const login = () => {
        loginGoogleAuth();
    }

    return (
        <IconButton
            size="large"
            aria-label="show more"
            aria-controls={prop.mobileMenuID}
            aria-haspopup="true"
            onClick={login}
            color="inherit"
        >
            <MoreIcon />
        </IconButton>);
}