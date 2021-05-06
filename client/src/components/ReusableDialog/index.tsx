import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@material-ui/core';

interface ReusableDialogProps {
    title: string;
    show: boolean;
    handleClose: () => void;
}

const ReusableDialog: React.FC<ReusableDialogProps> = ({ show, handleClose, title, children }) => {

    return (
        <Dialog open={show} onClose={handleClose}>
            <DialogTitle>
                <Box fontWeight="fontWeightRegular" >
                    <span>{title}</span>
                </Box>
            </DialogTitle>

            <DialogContent dividers>
                {children}
            </DialogContent>

            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                            Save changes
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ReusableDialog
