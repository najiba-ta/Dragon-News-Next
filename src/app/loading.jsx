import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex items-center justify-center h-[85vh]'>
            Global Loading
            <span className="loading loading-ring loading-xl font-bold text-blue-700"></span>
        </div>
    );
};

export default LoadingPage;