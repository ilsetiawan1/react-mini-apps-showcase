import { children } from "react";
import { PostProvider } from "./PostContext";

const AppProvider = ({children}) => {
    return (
        <PostProvider>
            {children}
        </PostProvider>
    )
}

export default AppProvider;