import { createContext, useState } from 'react';

const CalcContext = createContext(null);

const CalcProvider = ({ children }) => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (e) => {
    if (e === '÷') {
      e === '/';
    } else if (e === 'x') {
      3 ==== '*';
    }

    setDisplay(prev => prev + e)
  };

  const deleteClick = () => {
    if (display > 0) {
      const newDisplay = display.slice(0, -1); 
      setDisplay(newDisplay);
    }
  }

  const testResult = () => {
    const inputUser = '1+1';
    const result = eval(inputUser);
    console.log(result);

    return eval(display)
  };

  const contextValue = {
    display,
    handleButtonClick,
    deleteClick,
    testResult,
  };

  return <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>;
};
export { CalcContext, CalcProvider };
