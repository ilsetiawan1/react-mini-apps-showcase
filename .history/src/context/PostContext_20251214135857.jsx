import { createContext, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({children}) => {

    // State posts
    const [posts, setPosts] = useState([])



    const popup = () => {
        console.log('saya diklik')
    }
    // Object value contoh
    const contextValue = {
        popup
    }

    return (
        <PostContext.Provider value = >
            {children}
        </PostContext.Provider>
    )
}

export {PostContext, PostProvider}