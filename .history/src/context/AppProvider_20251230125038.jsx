import { PostProvider } from "./PostContext";
import Calc

const AppProvider = ({children}) => {
    return (
        <PostProvider>
            {children}
        </PostProvider>
    )
}

export default AppProvider;