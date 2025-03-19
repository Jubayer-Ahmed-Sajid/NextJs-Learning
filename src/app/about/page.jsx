import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-gray-100 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-center text-cyan-400 mb-6">About Us</h1>
            <p className="text-lg leading-relaxed mb-4">
                Welcome to <span className="font-semibold text-cyan-300">Tech Haven</span>, your one-stop shop for the latest and greatest in technology. 
                We are passionate about bringing cutting-edge gadgets and tools to tech enthusiasts and professionals alike.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                At Tech Haven, we believe in quality, innovation, and exceptional customer service. 
                Whether you're looking for the newest devices or reliable accessories, we've got you covered.
            </p>
            <p className="text-lg leading-relaxed">
                Our mission is to empower you with technology that makes life easier, more productive, and more enjoyable. 
                Thank you for choosing <span className="font-semibold text-cyan-300">Tech Haven</span> — where technology meets excellence.
            </p>
        </div>
    );
};

export default About;