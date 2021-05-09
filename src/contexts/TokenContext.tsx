import React, {
  ReactNode, useState,
} from 'react';

interface TokenProviderProps{
    children: ReactNode;
}

interface TokenContextData {
    token: any;
    isUserLoggedIn: boolean;
    updateToken: (obj: any) => void;
    authenticateUser: () => void;
    unauthenticateUser: () => void;
}

export const TokenContext = React.createContext({} as TokenContextData);

export default function TokenProvider({ children }: TokenProviderProps) {
  const [token, setToken] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function updateToken(obj: any) {
    setToken(obj);
  }

  function authenticateUser() {
    setIsUserLoggedIn(true);
  }

  function unauthenticateUser() {
    setIsUserLoggedIn(false);
  }

  return (
    <TokenContext.Provider value={{
      token,
      isUserLoggedIn,
      updateToken,
      authenticateUser,
      unauthenticateUser,
    }}
    >
      { children }
    </TokenContext.Provider>
  );
}
