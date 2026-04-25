import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async ({params}) => {
    const {id}= await params;
    console.log(id,"params");
    const categories= await getCategories();
    const news = await getNewsByCategoryId(id)
    console.log(news);
    return <div className="grid grid-cols-12 gap-4 container mx-auto my-5">
    <div className=" col-span-3 ">
      <LeftSidebar categories={categories} activeId ={id} ></LeftSidebar>
    </div>
    <div className="col-span-6 ">
      All News
      <div className="space-y-4 mt-6">
        {news.length > 0 ? (news.map((n) => {
          return <NewsCard key={n._id} news={n}></NewsCard>;
        })): (<h2 className='font-bold text-2xl text-center my-7'>No News found</h2>)}
      </div>
    </div>
    <div className="col-span-3 ">
     <RightSidebar></RightSidebar>
    </div> 
</div>
};

export default NewsCategoryPage;