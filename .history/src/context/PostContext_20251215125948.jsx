import { createContext, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({children}) => {

    // State posts
    const [posts, setPosts] = useState([])



    const popup = () => {
        alert(`saya diklik`)
    }
    // Object value contoh
    const contextValue = {
        posts,
        popup
    }

    return (
        <PostContext.Provider value = {contextValue}>
            {children}
        </PostContext.Provider>
    )
}

export {PostContext, PostProvider}