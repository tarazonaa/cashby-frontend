import React, { createContext, useState } from "react";

export const DataContext = createContext<ContextData>({
  transversalData: {
    scrollPositionReached: false,
  },
  setTransversalData: () => {},
});

export const DataContextProvider: React.FC = (props) => {
  const [transversalData, setTransversalData] = useState<TransversalData>({
    scrollPositionReached: false,
  });

  return (
    <DataContext.Provider value={{ transversalData, setTransversalData }}>
      {props.children}
    </DataContext.Provider>
  );
};