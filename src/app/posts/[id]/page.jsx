import React from "react";

export const singlePostDetails = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
};

export const generateMetadata = async ({ params }, parent) => {
    const { id } = params;
  const post = await singlePostDetails(id);
 
console.log('its post', post)
  return {
    title: post.title,
    description: post.body,
  };
};

const SinglePost = async ({ params }) => {
  const { id } = params;
  const singlePost = await singlePostDetails(id);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-gray-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
        {singlePost.title}
      </h1>
      <p className="text-lg leading-relaxed text-gray-300 mb-6">
        {singlePost.body}
      </p>
      <p className="text-sm text-gray-500 text-right">
        User ID: {singlePost.userId}
      </p>
    </div>
  );
};

export default SinglePost;
