import { Children, createContext, useState } from 'react';

const PostContext = createContext(null);

const Provider = ({Children}) => {

    // State posts
    const [posts, setPosts] = useState()

    return (
        <Context.Provider>
            {Children}
        </Context.Provider>
    )
}

export {PostContextContext, Provider}