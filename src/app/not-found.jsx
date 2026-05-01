import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-200 px-4">
            <div className="text-center space-y-6">
                
                {/* Big 404 */}
                <h1 className="text-8xl font-extrabold text-purple-500 drop-shadow-lg">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Oops! Page not found
                </h2>

                <p className="text-gray-500 max-w-md mx-auto">
                    The page you’re looking for doesn’t exist or has been moved.
                    Maybe you typed the wrong URL… happens to the best of us.
                </p>

                {/* Button */}
                <Link href={"/"}>
                    <button className="mt-4 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-full shadow-md transition-all duration-300 hover:scale-105">
                        Go Back Home
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default NotFound;
