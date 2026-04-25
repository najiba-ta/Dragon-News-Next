import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories,activeId}) => {
    return (
        <div>
            <h2 className="font-bold text-lg">All categories</h2>
            <ul className="flex flex-col gap-3 mt-4">
                {
                    categories.news_category.map(category => {
                        return <li key={category.category_id} className={`${activeId === category.category_id && "bg-gray-300"} rounded-md text-center font-bold text-md`}>
                            <Link href={`/category/${category.category_id}`}className='block p-2 '>{""}{category.category_name}</Link>
                            </li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSidebar;