import { createContext, useState } from 'react';

const CalcContext = createContext(null);

const CalcProvider = ({ children }) => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (e) => {
    e === "="
    ? setDisplay("Hello World!")
    : setDisplay(prev => prev + e)
  };

  const deleteClick = () => {
    if (display > 0) {
      const newDisplay = display.slice(0, -1); 
    }
  }

  const testResult = () => {
    const inputUser = '1+1';
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
