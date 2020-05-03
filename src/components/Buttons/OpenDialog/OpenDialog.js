import React, {useContext} from 'react';
import { Button } from "@material-ui/core";
import DialogContext from "../../../context/DialogContext";
import DialogDefault from "../../Dialogs/DialogDefault/DialogDefault";

const OpenDialog = () => {
    const {
        openDialog
    } = useContext(DialogContext);
    return (
        <Button variant='contained' onClick={() => openDialog({
            dialogChildren: <DialogDefault/>,
            dialogProps: {}
        })}>
            Open Dialog
        </Button>
    );
};

export default OpenDialog;
