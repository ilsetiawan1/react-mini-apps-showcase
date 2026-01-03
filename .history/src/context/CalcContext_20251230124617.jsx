

const CalcContext = createContext(null);

const CalcProvider = ({children}) => {




    return <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>;
}