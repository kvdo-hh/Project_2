import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Stack from '@mui/material/Stack';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
//LOGIN Function nicht erstellt, weil zeitlich nicht drin
import { cyan } from '@mui/material/colors';


export default function IconButtons() {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="edit" fontSize="medium" sx={{ color: cyan[500] }}>
                <EditRoundedIcon />
            </IconButton>
            <IconButton aria-label="home" fontSize="medium" sx={{ color: cyan[500] }}>
                <HomeRoundedIcon />
     // </IconButton>
     // <IconButton aria-label="login" fontSize="medium" sx={{ color: cyan[500] }}>
       //</IconButton> <LoginRoundedIcon />
        </Stack>
    );
}