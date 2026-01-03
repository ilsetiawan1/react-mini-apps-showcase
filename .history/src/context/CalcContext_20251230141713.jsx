import { createContext } from 'react';

const CalcContext = createContext(null);

const CalcProvider = ({ children }) => {


const handleButtonClick = (e) => {

}

const contextValue = {
    cek,
    handleButtonClick
}

  return <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>;
};
export { CalcContext, CalcProvider };
