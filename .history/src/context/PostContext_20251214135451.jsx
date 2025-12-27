import { Children, createContext, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({child}) => {

    // State posts
    const [posts, setPosts] = useState([])

    return (
        <PostContext.Provider>
            {child}
        </PostContext.Provider>
    )
}

export {PostContext, PostProvider}