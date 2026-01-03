import { PostProvider } from "./PostContext";
import CalcPro

const AppProvider = ({children}) => {
    return (
        <PostProvider>
            {children}
        </PostProvider>
    )
}

export default AppProvider;