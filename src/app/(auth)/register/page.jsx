'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RagisterPage = () => {
    const {register,watch,handleSubmit,formState:{errors}} = useForm();
    const handleRagisterFunc =(data) => {
        console.log(data,"data");
    }
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white p-12 w-[45%] my-7'>
                <h2 className='font-bold text-gray-700 text-3xl text-center mb-6'>Register Your account</h2>
                <hr className='my-7 text-gray-200' />
                <form className='space-y-2' onSubmit={handleSubmit(handleRagisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-lg text-gray-700">Name</legend>
                        <input type="name" className="input w-full bg-neutral-200" placeholder="Type your name" {...register("name")} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-lg text-gray-700">Photo URL</legend>
                        <input type="text" className="input w-full bg-neutral-200" placeholder="Type your photo url" {...register("photo url")} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-lg text-gray-700">Email address</legend>
                        <input type="email" className="input w-full bg-neutral-200" placeholder="Enter your email address" {...register("email")} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-lg text-gray-700">Password</legend>
                        <input type="password" className="input w-full bg-neutral-200" placeholder="Enter your password" {...register("password",{required:"Password field is required"})} />
                        {errors.password && <p className='text-red-700'>{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RagisterPage;