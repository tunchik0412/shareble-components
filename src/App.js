import React from 'react';
import './App.css';
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import DialogProvider,{ DialogContext } from '@bit/tunchik0412.dialogprovider.dialogs';

const DialogDefault = () => {
  const {
    closeDialog: handleClose
  } = React.useContext(DialogContext);
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

const OpenDialogButton = () => {
  const {
    openDialog
  } = React.useContext(DialogContext);
    return (
    <Button
    variant='contained'
    onClick={()=> openDialog({
      dialogChildren: <DialogDefault/>,
      dialogProps: {}
    })}
    >
      Open
    </Button>
)};

function App() {
  return (
    <DialogProvider>
      <OpenDialogButton/>
    </DialogProvider>
  );
}

export default App;
