import { type ReactNode, useContext, useState, createContext } from "react";

export interface AppContextType {
  isLoading: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsLoading: (isLoading: boolean) => void;
}

//@ts-expect-error: ignore initial context creation
const AppContext = createContext<AppContextType>(null);

export const useApp = () => useContext(AppContext);

export interface AppContextProviderProps {
  children: ReactNode;
}
export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};
