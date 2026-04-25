
import Image from 'next/image';
import React from 'react';
import avatar from '@/assets/user.png'
import Link from 'next/link';
import Navlink from './Navlink';

const Navbar = () => {
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
            <div className='flex items-center gap-2'>
                <Image src={avatar} alt='User Avatar' width={50} height={50}/>
                <button className='btn btn-info'><Link href='/login'>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;