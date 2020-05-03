import React, {useContext} from 'react';
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import DialogContext from "../../../context/DialogContext";

const DialogDefault = () => {
    const {
        closeDialog: handleClose
    } = useContext(DialogContext);
    return (
        <div>
            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Disagree
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </div>
    );
};

export default DialogDefault;
