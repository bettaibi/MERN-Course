import { Snackbar,  } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { useCallback, useState } from "react";

type SeverityType = "error" | "warning" | "info" | "success";

interface Direction {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
}

interface ToastState{
    message: string;
    type: SeverityType;
    open: boolean;
}

const useToast = (direction: Direction) => {

    const [toast, setToast] = useState<ToastState>({message: '', open: false, type: 'success'})

    function showMsg(message: string, type: SeverityType): void {
        setToast({message, open: true, type : type});
    }

    const handleClose = () => {
        setToast({message: '', open: false, type : 'success'});
    };

    const { vertical, horizontal } = direction;

    const Toast = useCallback(
        () => (
            <Snackbar 
            open={toast.open} 
            autoHideDuration={4000} 
            onClose={handleClose}
            anchorOrigin={{ vertical, horizontal }}
            key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity={toast.type}>
                    {toast.message}
                </Alert>
            </Snackbar>
        ),
        [toast, vertical, horizontal],
    )

    return {
        showMsg,
        Toast
    }
};

export default useToast;