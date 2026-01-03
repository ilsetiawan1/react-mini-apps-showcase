import { PostProvider } from "./PostContext";
import { CalcProvider } from "./CalcContext";

const AppProvider = ({children}) => {
    return (
        <PostProvider>
            <CalcProvider>
                
            </CalcProvider>
            {children}
        </PostProvider>
    )
}

export default AppProvider;