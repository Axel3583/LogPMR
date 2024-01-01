import React from "react";
import { TabContextProviderProps, TabContextType } from "../../utils/models";


const TabContext = React.createContext<TabContextType>({ opened: false, toggleOpened: () => {console.log("ok")} });

export const TabContextProvider: React.FC<TabContextProviderProps> = ({ children }) => {
  const [opened, setOpened] = React.useState(false);

  const toggleOpened = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  const contextValue = React.useMemo(() => ({ opened, toggleOpened }), [opened]);

  return (
    <TabContext.Provider value={contextValue}>
      { children }
    </TabContext.Provider>
  );
};

export const useTabMenu = () => React.useContext(TabContext);
