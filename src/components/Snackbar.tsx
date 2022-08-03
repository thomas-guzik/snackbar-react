import React, { createContext, useContext, useState } from 'react';

type SnackbarContextType = {
  triggerSnackbar: (incomingMsg: string, color: string) => void;
}

const SnackbarContext = createContext<SnackbarContextType>({triggerSnackbar:() => {}});

// Hook to provide access to context object
export const UseSnackbarContext = () => {
  return useContext(SnackbarContext);
};

export const SnackbarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [isDisplay, setIsDisplay] = useState(false);
  const [msg, setMsg] = useState('');
  const [color, setColor] = useState('#fff');

  const triggerSnackbar = (incomingMsg: string) => {
    setMsg(incomingMsg)
    setIsDisplay(!isDisplay);
  }

  return (
    <SnackbarContext.Provider value={{triggerSnackbar}}>
      {children}
      {isDisplay && <h2 >{msg}</h2>}
    </SnackbarContext.Provider>
  );
};