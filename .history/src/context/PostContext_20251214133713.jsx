import { Children, createContext } from 'react';

const PostContext = createContext(null);

const Provider = ({Children}) => {
    return (
        <Context.Provider>
            {Children}
        </Context.Provider>
    )
}