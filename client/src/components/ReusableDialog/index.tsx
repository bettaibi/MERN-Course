import React from 'react';
import { Dialog, DialogTitle, DialogContent, Box } from '@material-ui/core';

interface ReusableDialogProps {
    title: string;
    show: boolean;
    handleClose: () => void;
    content: JSX.Element;
}

const ReusableDialog: React.FC<ReusableDialogProps> = ({ show, handleClose, title, content }) => {

    return (
        <Dialog open={show} onClose={handleClose}>
            <DialogTitle>
                <Box fontWeight="fontWeightRegular" >
                    <span>{title}</span>
                </Box>
            </DialogTitle>

            <DialogContent dividers>
                {content}
            </DialogContent>
        </Dialog>
    )
}

export default ReusableDialog
