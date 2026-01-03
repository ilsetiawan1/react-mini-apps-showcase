import { PostProvider } from "./PostContext";
import { CalcProvider } from "./CalcContext";

const AppProvider = ({children}) => {
    return (
        <PostProvider>
            <Calc
            {children}
        </PostProvider>
    )
}

export default AppProvider;