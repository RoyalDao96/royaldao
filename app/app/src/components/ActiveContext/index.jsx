// ActiveContext.js
import React, { createContext, useState } from 'react';

export const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [provider, setProvider] = useState(null);

  return (
    <ActiveContext.Provider value={{ isActive, setIsActive, walletAddress, setWalletAddress, provider, setProvider }}>
      {children}
    </ActiveContext.Provider>
  );
};
