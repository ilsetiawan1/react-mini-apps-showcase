import { Children, createContext, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({Children}) => {

    // State posts
    const [posts, setPosts] = useState([])

    return (
        <PostContext.Provider>
            {Children}
        </PostContext.Provider>
    )
}

export {PostContext, PostProvider}