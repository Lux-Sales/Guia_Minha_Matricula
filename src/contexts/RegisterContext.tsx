import React, { ReactNode, useState } from 'react';

interface RegisterProviderProps{
    children: ReactNode;
}

interface RegisterContextData {
    isRegisterModalOpen: boolean;
    showRegisterModal: () => void;
    hideRegisterModal: () => void;
}

export const RegisterContext = React.createContext({} as RegisterContextData);

export default function RegisterProvider({ children }: RegisterProviderProps) {
  const [isRegisterModalOpen, setisRegisterModalOpen] = useState(false);

  function showRegisterModal() {
    setisRegisterModalOpen(true);
  }

  function hideRegisterModal() {
    setisRegisterModalOpen(false);
  }

  return (
    <RegisterContext.Provider value={{
      isRegisterModalOpen,
      showRegisterModal,
      hideRegisterModal,
    }}
    >
      { children }
    </RegisterContext.Provider>
  );
}
