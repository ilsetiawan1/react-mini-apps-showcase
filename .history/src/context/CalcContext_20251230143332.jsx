import { createContext, useState } from 'react';

const CalcContext = createContext(null);

const CalcProvider = ({ children }) => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (e) => {};

  const testResult = () => {
    const 
  }

  const contextValue = {
    display,
    handleButtonClick,
    testResult,
  };

  return <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>;
};
export { CalcContext, CalcProvider };
