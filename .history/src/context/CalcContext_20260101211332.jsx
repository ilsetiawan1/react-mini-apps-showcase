import { createContext, useState } from 'react';

const CalcContext = createContext(null);

const CalcProvider = ({ children }) => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (e) => {
    e === "="
    ? setDisplay
    setDisplay(prev => prev + e)
  };

  const testResult = () => {
    const inputUser = 'Hello World';
    const result = eval(inputUser);
    console.log(result);
  };

  const contextValue = {
    display,
    handleButtonClick,
    testResult,
  };

  return <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>;
};
export { CalcContext, CalcProvider };
