import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-cyan-400">Dashboard</h1>
                <p className="text-gray-300 mt-2">Welcome to your dashboard. Here's an overview of your data.</p>
            </header>

            {/* Statistics Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-cyan-300">Users</h2>
                    <p className="text-4xl font-bold mt-4">1,234</p>
                    <p className="text-gray-400 mt-2">Total registered users</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-cyan-300">Recipes</h2>
                    <p className="text-4xl font-bold mt-4">567</p>
                    <p className="text-gray-400 mt-2">Total recipes available</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-cyan-300">Views</h2>
                    <p className="text-4xl font-bold mt-4">89,123</p>
                    <p className="text-gray-400 mt-2">Total page views</p>
                </div>
            </section>

            {/* Recent Activity */}
            <section>
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">Recent Activity</h2>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center">
                            <p className="text-gray-300">John Doe added a new recipe: <span className="text-cyan-300">Spaghetti Bolognese</span></p>
                            <span className="text-gray-500 text-sm">2 hours ago</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <p className="text-gray-300">Jane Smith registered as a new user</p>
                            <span className="text-gray-500 text-sm">5 hours ago</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <p className="text-gray-300">Recipe <span className="text-cyan-300">Chicken Curry</span> reached 1,000 views</p>
                            <span className="text-gray-500 text-sm">1 day ago</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;