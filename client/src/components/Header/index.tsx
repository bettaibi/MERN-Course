import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Sidenav from '../Sidenav';
import useToggle from '../useToggle';

const Header: React.FC = () => {
    const { show, closeHandler, openHandler } = useToggle();

    return (
        <React.Fragment>
            <AppBar position="sticky">
                <Toolbar variant="dense">
                    <IconButton color="inherit" onClick={openHandler}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">
                        MERN Stack Demo
                </Typography>
                </Toolbar>
            </AppBar>
            <Sidenav show = {show} closeHandler = {closeHandler} />
        </React.Fragment>
    )
}

export default Header;
