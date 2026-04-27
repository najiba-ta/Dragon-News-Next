'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';

const RagisterPage = () => {

      const [isShowPassword,setIsShowPassword] = useState (false) ;

    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    const handleRagisterFunc = async (data) => {
        console.log(data, "data");
        const { email, name, photourl, password } = data;
        console.log(name, photourl);

        const { data: res , error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photourl,
          
        })

        console.log(error,res);
        if(error){
            alert(error.message)
        }
        if(res){
            alert("SignUp Successful")
            redirect ('/')
        }

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
                        <input name='photo' type="text" className="input w-full bg-neutral-200" placeholder="Type your photo url" {...register("photourl")} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold text-lg text-gray-700">Email address</legend>
                        <input type="email" className="input w-full bg-neutral-200" placeholder="Enter your email address" {...register("email")} />
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend font-bold text-lg text-gray-700">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} className="input w-full bg-neutral-200" placeholder="Enter your password" {...register("password", { required: "Password field is required" })} />
                        {errors.password && <p className='text-red-700'>{errors.password.message}</p>}
                        <span className=' absolute right-2 top-4' onClick={()=> setIsShowPassword(!isShowPassword)}>
                                                    {isShowPassword ? <FaEye/> : <LuEyeClosed/>}
                                                </span>
                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RagisterPage;