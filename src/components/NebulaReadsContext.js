// src/components/NebulaReadsContext.js
import React, { createContext, useContext, useState } from 'react';

const NebulaReadsContext = createContext();

export const NebulaReadsProvider = ({ children }) => {
  const [state, setState] = useState({
    // Your context state here
  });

  return (
    <NebulaReadsContext.Provider value={[state, setState]}>
      {children}
    </NebulaReadsContext.Provider>
  );
};

export const useNebulaReads = () => useContext(NebulaReadsContext);
