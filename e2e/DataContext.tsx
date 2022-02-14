import React, { createContext, useState } from "react";
import bcrypt from "bcryptjs";

export const DataContext = createContext<ContextData>({
  transversalData: {
    scrollPositionReached: false,
    loggedIn: false,
    salt: bcrypt.genSaltSync(10),
  },
  setTransversalData: () => {},
});

export const DataContextProvider: React.FC = (props) => {
  const [transversalData, setTransversalData] = useState<TransversalData>({
    scrollPositionReached: false,
    loggedIn: false,
    salt: bcrypt.genSaltSync(10),
  });

  return (
    <DataContext.Provider value={{ transversalData, setTransversalData }}>
      {props.children}
    </DataContext.Provider>
  );
};
