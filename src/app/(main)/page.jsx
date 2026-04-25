
import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";


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
export default async function Home() {
  const categories = await getCategories()
  console.log(categories.news_category,"hmmm");

  const news = await getNewsByCategoryId("03");
  console.log(news,"matha");
  return (
   <div className="grid grid-cols-12 gap-4 container mx-auto my-5">
    <div className=" col-span-3 ">
      <LeftSidebar categories={categories} activeId ={null} ></LeftSidebar>
    </div>
    <div className="font-bold bg-purple-100 col-span-6 ">
      All News
      <div className="space-y-4">
        {news.map((n) => {
          return <div className="p-6 rounded-md border" key={n._id}>
            {n.title}
          </div>;
        })}
      </div>
    </div>
    <div className="col-span-3 ">
     <RightSidebar></RightSidebar>
    </div>
   
   </div>
  );
}
