'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NotFound = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
            <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
            <p className="text-xl text-gray-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
            <div className="flex space-x-4">
                <button
                    onClick={() => router.back()}
                    className="bg-gray-800 text-gray-100 py-2 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
                >
                    Go Back
                </button>
                <Link
                    href="/"
                    className="bg-cyan-500 text-gray-900 py-2 px-6 rounded-lg shadow-lg hover:bg-cyan-600 transition-colors duration-300"
                >
                    Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;