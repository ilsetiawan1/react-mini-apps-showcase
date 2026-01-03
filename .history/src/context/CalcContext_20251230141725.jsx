import { createContext } from 'react';

const CalcContext = createContext(null);

const CalcProvider = ({ children }) => {

const [expression]

const handleButtonClick = (e) => {

}

const contextValue = {
    handleButtonClick
}

  return <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>;
};
export { CalcContext, CalcProvider };
