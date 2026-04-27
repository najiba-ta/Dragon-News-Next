'use client'
import Image from 'next/image';
import React from 'react';
import avatar from '@/assets/user.png'
import Link from 'next/link';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending} = authClient.useSession();
    const user = session?.user;

    console.log(user,isPending,"user");


    return (
        <div className='flex justify-between container mx-auto mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-4 text-gray-800'>
                <li>
                    <Navlink href='/'>Home</Navlink>
                    </li>
                <li>
                    <Navlink href='/about-us'>About</Navlink>
                    </li>
                <li>
                    <Navlink href='/career'>Career</Navlink>
                    </li>
            </ul>
           {isPending ? <span className="loading loading-spinner loading-xl"></span> : user ?  <div className='flex items-center gap-2'>
                <h2>Hello, {user.name}</h2>
                <Image src={user?.image || avatar} alt='User Avatar' width={50} height={50}/>
                <button className='btn btn-info' onClick={async () => await authClient.signOut()}>Logout</button>
            </div> :
            <button className='btn btn-info'><Link href='/login'>Login</Link></button>}
        </div>
    );
};

export default Navbar;