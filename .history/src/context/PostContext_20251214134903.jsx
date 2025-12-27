import { Children, createContext, useState } from 'react';

const PostContext = createContext(null);

const Provider = ({Children}) => {

    // State posts
    const [posts, setPosts] = useState([])

    return (
        <Post.Provider>
            {Children}
        </Post.Provider>
    )
}

export {PostContextContext, Provider}