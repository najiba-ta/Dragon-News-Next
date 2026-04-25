import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import React from 'react';

async function getCategories (){
   const res = await fetch ("https://openapi.programming-hero.com/api/news/categories")
   const data = await res.json()
   return data.data;
}
async function getNewsByCategoryId (category_id){
   const res = await fetch (`https://openapi.programming-hero.com/api/news/category/${category_id}`)
   const data = await res.json()
   return data.data;
}

const NewsCategoryPage = async ({params}) => {
    const {id}= await params;
    console.log(id,"params");
    const categories= await getCategories();
    const news = await getNewsByCategoryId(id)
    return <div className="grid grid-cols-12 gap-4 container mx-auto my-5">
    <div className=" col-span-3 ">
      <LeftSidebar categories={categories} activeId ={id} ></LeftSidebar>
    </div>
    <div className="font-bold bg-purple-100 col-span-6 ">
      All News
      <div className="space-y-4">
        {news.length > 0 ? news.map((n) => {
          return <div className="p-6 rounded-md border" key={n._id}>
            {n.title}
          </div>;
        }) : <h2 className='font-bold text-2xl text-center my-7'>No News found</h2>}
      </div>
    </div>
    <div className="col-span-3 ">
     <RightSidebar></RightSidebar>
    </div>
   
   </div>
};

export default NewsCategoryPage;