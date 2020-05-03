import React from 'react';
import './App.css';
import DialogProvider from "./components/DialogProvider/Dialog";
import OpenDialog from "./components/Buttons/OpenDialog/OpenDialog";

function App() {
  return (
    <DialogProvider>
      <OpenDialog/>
    </DialogProvider>
  );
}

export default App;
