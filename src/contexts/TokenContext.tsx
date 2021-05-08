import React, {
  ReactNode, useState,
} from 'react';

interface TokenProviderProps{
    children: ReactNode;
}

interface TokenContextData {
    token: any;
    updateToken: (obj: any) => void;
}

export const TokenContext = React.createContext({} as TokenContextData);

export default function TokenProvider({ children }: TokenProviderProps) {
  const [token, setToken] = useState({});

  function updateToken(obj: any) {
    setToken(obj);
  }

  return (
    <TokenContext.Provider value={{
      token,
      updateToken,
    }}
    >
      { children }
    </TokenContext.Provider>
  );
}
