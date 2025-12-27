import { createContext, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({children}) => {

    // State
    const [posts, setPosts] = useState([])
    const [newPosts, setnewPosts] = useState({
        title: '',
        content: ''
    })

    // Input Handler
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setnewPosts((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    
    // Submit Handler
    const handleAddPosts = (e) => {
        e.preventDefault();
        
        setPosts((prev) => [...prev, newPosts]);
        setnewPosts({
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
        newPosts,
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