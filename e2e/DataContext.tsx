import React, { createContext, useState } from "react";

export const DataContext = createContext<ContextData>({
  transversalData: {
    scrollPositionReached: false,
    loggedIn: false,
  },
  setTransversalData: () => {},
});

export const DataContextProvider: React.FC = (props) => {
  const [transversalData, setTransversalData] = useState<TransversalData>({
    scrollPositionReached: false,
    loggedIn: false,
  });

  return (
    <DataContext.Provider value={{ transversalData, setTransversalData }}>
      {props.children}
    </DataContext.Provider>
  );
};
