import { getNewsDetailsById } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye, FaShareSquare, FaStar } from 'react-icons/fa';
import { IoBookmarksSharp } from 'react-icons/io5';

const NewsDetailsPage =async ({params}) => {
    const {id} = await params;
    console.log(id,"Pera");
    const news = await getNewsDetailsById(id);
    console.log(news);
    return (
        <div className='max-w-5xl mx-auto'>
            <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <figure>
                <Image
                    src={news.image_url}
                    alt={news.title}
                    width={350}
                    height={300}
                    className='w-full' />
            </figure>
            <p className='truncate'>{news.details}</p>
                {/* Author Info */}
                <div className='flex justify-between items-center bg-slate-200 p-4'>
                    <div>
                       <Image src={news.author?.img} alt={news.author?.name || "Author"}  height={40} width={40} className='rounded-full'/>
                       <h2 className='font-semibold'>{news.author?.name}</h2>
                       <p className='textarea-xs'>{news.author?.publish_date}</p>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                      <FaShareSquare className='text-xl' />
                      <IoBookmarksSharp className='text-xl' />
                    </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
            </div>
            <p className=''>{news.details}</p>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <h2 className='flex gap-2 items-center'>
                        <FaStar className='text-lg text-yellow-500' />{news?.rating?.number}
                    </h2>
                   <h2 className='flex gap-4 items-center'>
                     <FaEye />{news.total_view}
                   </h2>
                </div>
                <Link href={`/category/${news.category_id}`}>
                 <button className='btn btn-accent'>See Other News For This Category<ArrowRight></ArrowRight></button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default NewsDetailsPage;