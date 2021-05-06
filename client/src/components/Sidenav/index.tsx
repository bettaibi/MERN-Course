import React from 'react';
import useStyle from '../../style';
import {
    Drawer,
    Grid,
    IconButton,
    Typography,
    Toolbar,
    Box,
    Collapse
} from '@material-ui/core';
import { ArrowBack, ChevronRightOutlined } from '@material-ui/icons'
import useToggle from '../useToggle';
import { NavLink } from 'react-router-dom';
import { ClassNameMap } from '@material-ui/styles';
import clsx from 'clsx';

interface SidenavProps {
    show: boolean;
    closeHandler: () => void;
}
const Sidenav: React.FC<SidenavProps> = ({ show, closeHandler }) => {
    const classes = useStyle();

    return (
        <React.Fragment>
            <Drawer variant="persistent" anchor="left"
                open={show} onClose={closeHandler}>
                <Toolbar variant="dense" className={classes.padding0}>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item>
                            <Typography variant="h6">
                                MERN STACK
                            </Typography>
                        </Grid>

                        <Grid item>
                            <IconButton onClick={closeHandler} size="small">
                                <ArrowBack />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>

                <SidenavContent classes={classes} />

            </Drawer>
        </React.Fragment>
    )
};

interface SidenavContentProps {
    classes: ClassNameMap;
}
const SidenavContent: React.FC<SidenavContentProps> = ({ classes }) => {

    return (
        <Box px={1} py={2}>
            <ul className={classes.mp0}>
                
               <CollapsedItem classes={classes} path="/starting-page" title="Introduction" />

                <li className={classes.navLinkSpacing}>
                    <NavLink to="/" exact className={classes.navLink} activeClassName={classes.NavLiknActive}>
                        Post Management
                    </NavLink>
                </li>
                <li className={classes.navLinkSpacing}>
                    <NavLink to="/users" className={classes.navLink} activeClassName={classes.NavLiknActive}>
                        User Management
                    </NavLink>
                </li>
                <li className={classes.navLinkSpacing}>
                    <NavLink to="/search" className={classes.navLink} activeClassName={classes.NavLiknActive}>
                        Search
                    </NavLink>
                </li>
            </ul>
        </Box>
    )
}

interface CollapsedItemProps {
    classes: ClassNameMap;
    title: string;
    path: string;
}
const CollapsedItem: React.FC<CollapsedItemProps> = ({ classes, path, title }) => {
    const { show, toggleHandler } = useToggle();

    return (
        <li onClick={toggleHandler} className={classes.cursor}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={.5}>
                <span>Get Started</span>
                <IconButton size="small" className={clsx(classes.rotate0, {[classes.rotate90]: show})}>
                    <ChevronRightOutlined />
                </IconButton>
            </Box>

            <Collapse in={show} timeout="auto" unmountOnExit>
                <Box mb={1} mx={1}>
                    <NavLink to={path} className={classes.navLink} 
                    activeClassName={classes.NavLiknActive} onClick={(e)=> e.stopPropagation()}>
                            {title}
                    </NavLink>
                </Box>
            </Collapse>
        </li>
    )
}

export default Sidenav;
