import { Children, createContext } from 'react';

const PostContext = createContext(null);

const Provider = ({Children}) => {

    // F

    return (
        <Context.Provider>
            {Children}
        </Context.Provider>
    )
}

export {PostContextContext, Provider}