
import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";


async function getCategories (){
   const res = await fetch ("https://openapi.programming-hero.com/api/news/categories")
   const data = await res.json()
   return data.data;
}
export default async function Home() {
  const categories = await getCategories()
  console.log(categories.news_category,"hmmmm");
  return (
   <div className="grid grid-cols-12 gap-4 container mx-auto my-5">
    <div className=" col-span-3 ">
      <LeftSidebar categories={categories} activeId ={null} ></LeftSidebar>
    </div>
    <div className=" text-center font-bold text-3xl bg-purple-100 col-span-6 ">
      All News
    </div>
    <div className="col-span-3 ">
     <RightSidebar></RightSidebar>
    </div>
   
   </div>
  );
}
