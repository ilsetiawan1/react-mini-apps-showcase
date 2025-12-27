import { Children, createContext } from 'react';

const PostContext = createContext(null);

const Provider = ({Children}) => {

    // State posts
    const []

    return (
        <Context.Provider>
            {Children}
        </Context.Provider>
    )
}

export {PostContextContext, Provider}