import { Drawer } from '@material-ui/core';
import React from 'react';
import useStyle from '../../style';


interface SidenavProps{
    show: boolean;
    closeHandler: () => void;
}
const Sidenav: React.FC<SidenavProps> = ({show, closeHandler}) => {
    const classes = useStyle();

    return (
        <React.Fragment>
            <Drawer className= {classes.sidenav} variant="persistent" anchor="left"
            open={show} onClose={closeHandler}>
                <button onClick={closeHandler}>close</button>

            </Drawer>
        </React.Fragment>
    )
}

export default Sidenav;
