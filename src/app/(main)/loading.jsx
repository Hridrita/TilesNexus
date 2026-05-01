import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center flex-col gap-4">
      <span className="loading loading-dots loading-xl"></span>
      <h2 className="text-xl font-medium text-slate-600">Loading...</h2>
    </div>
  );
};

export default Loading; // এই লাইনটি নিশ্চিত করুন