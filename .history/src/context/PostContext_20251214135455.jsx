import { Children, createContext, useState } from 'react';

const PostContext = createContext(null);


    // State posts
    const [posts, setPosts] = useState([])

    return (
        <PostContext.Provider>
        </PostContext.Provider>
    )
}

export {PostContext, PostProvider}