import { createContext, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({children}) => {

    // State
    const [posts, setPosts] = useState([])
    const [inputPost, setInputPost] = useState({
        title: '',
        content: ''
    })

    // Input Handler
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setInputPost((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    
    // Submit Handler
    const handleAddPosts = (e) => {
        e.preventDefault();
        
        setPosts((prev) => [...prev, inputPost]);
        setinputPost({
            title: '',
            content: '',
        })
    }
    
    // Data Posts terbaru (CONSOLE)
    console.log("Data Posts Terbaru:", posts)


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