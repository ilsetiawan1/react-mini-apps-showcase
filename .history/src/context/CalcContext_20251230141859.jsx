import { createContext, useState } from 'react';

const CalcContext = createContext(null);

const CalcProvider = ({ children }) => {

const [display, setDisplay] = useState("")

const handleButtonClick = (e) => {

}

const contextValue = {
    display,
    handleButtonClick
}

  return <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>;
};
export { CalcContext, CalcProvider };
