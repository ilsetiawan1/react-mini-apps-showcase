import { createContext, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({children}) => {

    // State
    const [posts, setPosts] = useState({})
    const [formPost, setFormPost] = useState({
        title: '',
        content: ''
    })

    // Input Handler
    const handleInputChange = (e) => {
        setFormPost({
            ...formPost
        })
        setPosts(formPost)
    }

    // Submit Handler
    const handleAddPosts = (e) => {
        e.preventDefault();
        console.log(posts)
    }



    const popup = () => {
        console.log('Saya diklik')
    }
    // Object value dikirim ke hooks
    const contextValue = {
        posts,
        formPost,
        handleInputChange,
        handleAddPosts,
        popup
    }

    return (
        <PostContext.Provider value = {contextValue}>
            {children}
        </PostContext.Provider>
    )
}

export {PostContext, PostProvider}