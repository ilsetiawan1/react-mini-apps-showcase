import { createContext, useState } from 'react';

const CalcContext = createContext(null);

const CalcProvider = ({ children }) => {
  const [display, setDisplay] = useState('');

  const [prev]

  const handleButtonClick = (e) => {
    if (e === '÷') {
      e = '/';
    } else if (e === 'x') {
      e = '*';
    }

    setDisplay((prev) => prev + e);
  };

  const deleteClick = () => {
    if (display.length > 0) {
      const newDisplay = display.slice(0, -1);
      setDisplay(newDisplay);
    }
  };

  // Clear All "AC"
  const clearAll = () => {
      setDisplay('')
  }

  const result = () => {
    // const inputUser = '1+1';
    // const result = eval(inputUser);
    // console.log(result);
    const result = eval(display);
    console.log(result);
    setDisplay(String(result));

    // return console.log(eval(display))
  };

  const contextValue = {
    display,
    handleButtonClick,
    deleteClick,
    result,
    clearAll
  };

  return <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>;
};
export { CalcContext, CalcProvider };
