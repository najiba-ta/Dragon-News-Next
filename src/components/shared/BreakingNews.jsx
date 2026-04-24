import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto'>
            <button className='btn bg-blue-300'>Latest News</button>
            <Marquee>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores totam aliquam libero nobis, est tempora dolorem voluptatibus illo, sed exercitationem molestiae ducimus cumque accusamus vitae quasi. Dignissimos, at cupiditate?
            </Marquee>
        </div>
    );
};

export default BreakingNews;