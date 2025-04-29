'use client'

import React, { useEffect, useState } from 'react'

import axios from 'axios'

interface Post {
    id: number
    title: string
}

const PostsComponent: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]) // Tipe state sebagai array Post
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get<Post[]>(
                    'https://jsonplaceholder.typicode.com/posts'
                )
                setPosts(response.data)
            } catch (error) {
                setError('Failed to fetch posts')
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, []) // Efek dijalankan sekali saat komponen pertama kali dirender

    if (error) return <div>{error}</div>

    return (
        <div>
            <h1>Posts:</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default PostsComponent
