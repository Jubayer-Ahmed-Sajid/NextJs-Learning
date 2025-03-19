import Link from 'next/link';
import React from 'react';

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        cache: 'force-cache'
    });
    const data = await res.json();
    return data;
};
export const metadata = {
    title: 'All Posts',
    description: '...',
  }

const Posts = async () => {
    const posts = await getPosts();

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center text-cyan-400 mb-8">Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">{post.title}</h2>
                        <p className="text-gray-300 mb-4">{post.body}</p>
                        <p className="text-sm text-gray-500 mb-4">User ID: {post.userId}</p>
                        <Link className='mx-auto place-content-center text-center button rounded-lg p-3 bg-blue-500' href={`/posts/${post.id}`}>Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;