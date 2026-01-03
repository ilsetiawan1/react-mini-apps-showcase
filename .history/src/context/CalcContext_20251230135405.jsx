import { createContext } from 'react';

const CalcContext = createContext(null);

const CalcProvider = ({ children }) => {

const cek = () => {
    alert('heiii')
}

c

  return <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>;
};
export { CalcContext, CalcProvider };
