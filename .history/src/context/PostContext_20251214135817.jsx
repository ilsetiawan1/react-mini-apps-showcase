import { createContext, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({children}) => {

    // State posts
    const [posts, setPosts] = useState([])



    const popup = () => {
        console.log
    }
    // Object value contoh


    return (
        <PostContext.Provider>
            {children}
        </PostContext.Provider>
    )
}

export {PostContext, PostProvider}