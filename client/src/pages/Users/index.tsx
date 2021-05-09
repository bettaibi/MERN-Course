import React from 'react';

import {
    Box, IconButton, Menu, MenuItem,

} from '@material-ui/core';
import { UserModel } from '../../models/app.model';
import { GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import DataTable from '../../components/DataTable';
import { MoreVert } from '@material-ui/icons';

const users: UserModel[] = [
    {id: '187885', lastname: 'Bettaibi', firstname: 'Nidhal', phone: '55362523', address: 'Ennor City, kasserine', email: 'bettaibinidhal00@gmail.com'},
    {id: '565656', lastname: 'Jhon', firstname: 'Doe', phone: '55362523', address: 'Sahloul, Sousse', email: 'bettaibinidhal00@gmail.com'},
    {id: '888987', lastname: 'Mehrez', firstname: 'Lahmar', phone: '55362523', address: 'Kabari, Tunis', email: 'bettaibinidhal00@gmail.com'},
    {id: '777898', lastname: 'Iheb', firstname: 'Quar', phone: '55362523', address: 'Kabari, Tunis', email: 'bettaibinidhal00@gmail.com'},
    {id: '222145', lastname: 'Riadh', firstname: 'Mahrez', phone: '55362523', address: 'Kabari, Tunis', email: 'bettaibinidhal00@gmail.com'},
    {id: '225888', lastname: 'Cristiano', firstname: 'Ronaldo', phone: '55362523', address: 'Kabari, Tunis', email: 'bettaibinidhal00@gmail.com'},
    {id: '98745', lastname: 'Tarek', firstname: 'dhiab', phone: '55362523', address: 'Kabari, Tunis', email: 'bettaibinidhal00@gmail.com'},
    {id: '587469', lastname: 'Ahmed', firstname: 'taher', phone: '55362523', address: 'Kabari, Tunis', email: 'bettaibinidhal00@gmail.com'},
    {id: '852147', lastname: 'Mohammed', firstname: 'Ali', phone: '55362523', address: 'Kabari, Tunis', email: 'bettaibinidhal00@gmail.com'},
    {id: '963258', lastname: 'Fayez', firstname: 'riadh', phone: '55362523', address: 'Kabari, Tunis', email: 'bettaibinidhal00@gmail.com'},
];

const columns: GridColDef[] = [
    // {field: 'lastname', headerName: 'Last Name', width: 150},
    // {field: 'firstname', headerName: 'First Name', width: 150},
    {field: 'fullName', headerName: 'Full Name', width: 150, valueGetter: getFullName},
    {field: 'phone', headerName: 'Phone', editable: true},
    {field: 'address', headerName: 'Address', width: 150},
    {field: 'email', headerName: 'Email', hide: true},
    {field: 'actions', headerName: 'Actions', renderCell: GetActionButtons,
    align:'right', headerAlign: 'right', disableColumnMenu: true, sortable: false}
];

function GetActionButtons(){
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <IconButton onClick={handleClick} size="small">
                <MoreVert />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Delete</MenuItem>
                <MenuItem onClick={handleClose}>Edit</MenuItem>
            </Menu>
        </React.Fragment>
    )
}

function getFullName(params: GridValueGetterParams){
    return params.getValue('firstname') + ' ' + params.getValue('lastname'); 
}

const Users: React.FC = () => {
    return (
        <Box py={3}>
           <DataTable  rows = {users} columns = {columns}  />
        </Box>
    )
}



export default Users;
