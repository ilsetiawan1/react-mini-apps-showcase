import { createContext, useEffect, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({children}) => {

    // State
    const [posts, setPosts] = useState([])
    const [inputPost, setInputPost] = useState({
        title: '',
        content: ''
    })

    // Data Posts terbaru (CONSOLE)
    useEffect(() => {
        console.log("Data Posts Terbaru:", posts)

    })

    // Input Handler
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setInputPost((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    
    // Add
    const handleAddPosts = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            ...inputPost,
        }
        
        setPosts((prev) => [...prev, newPost]);
        setInputPost({
            title: '',
            content: '',
        })
    }
    


    const popup = () => {
        console.log('Saya diklik')
    }
    // Object value dikirim ke hooks
    const contextValue = {
        posts,
        inputPost,
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