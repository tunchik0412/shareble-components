import React, {useState} from 'react';
import DialogContext from "../context/DialogContext";
import { Dialog } from "@material-ui/core";

const DialogProvider = (props) => {
    const [dialogState, setDialogState] = useState({
        isOpen: false,
        dialogChildren: undefined,
        dialogProps: undefined
    });

    const openDialog = ({dialogProps, dialogChildren}) => setDialogState({
        ...dialogState,
        isOpen: true,
        dialogProps,
        dialogChildren
    });

    const closeDialog = () => setDialogState({
        ...dialogState,
        isOpen:false
    });

    return (
        <DialogContext.Provider value={{
            isOpen: dialogState.isOpen,
            openDialog,
            closeDialog
        }}>
            {
                props.children
            }
            <Dialog open={dialogState.isOpen} onClose={closeDialog} {...dialogState.dialogProps}>
                {dialogState.dialogChildren}
            </Dialog>
        </DialogContext.Provider>
    );
};

export default DialogProvider;
