import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col space-y-2'>
            <h2 className='font-bold text-5xl text-purple-400'>This page is not found</h2>
            <Link href={"/"}>
            <button className='btn bg-purple-500 text-white mt-4'>Go Back Home</button>
            </Link>
        </div>
    );
};

export default NotFound;