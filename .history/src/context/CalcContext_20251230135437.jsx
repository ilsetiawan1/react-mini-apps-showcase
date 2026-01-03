import { createContext } from 'react';

const CalcContext = createContext(null);

const CalcProvider = ({ children }) => {

const cek = () => {
    alert('heiii')
}

const contextValue

  return <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>;
};
export { CalcContext, CalcProvider };
