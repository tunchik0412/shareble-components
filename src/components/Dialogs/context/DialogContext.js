import React from 'react';

const defaultContextValue = {
    isOpen: false,
    openDialog: () => {},
    closeDialog: undefined
};

export default React.createContext(defaultContextValue)
