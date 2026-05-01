import React from 'react';

const Loading = () => {
    return (
        <div className='flex h-[80vh] items-center justify-center'>
            <h2>Loading Image...</h2>
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default Loading;