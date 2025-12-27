import { children, createContext, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({children}) => {

    // State posts
    const [posts, setPosts] = useState([])

    return (
        <PostContext.Provider>
            {children}
        </PostContext.Provider>
    )
}

export {PostContext, PostProvider}