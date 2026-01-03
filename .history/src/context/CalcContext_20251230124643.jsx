

const CalcContext = createContext(null);

const CalcProvider = ({children}) => {




    return <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>;
}

export { CalcContext, PostProvider };
