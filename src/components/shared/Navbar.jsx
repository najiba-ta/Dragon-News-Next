
import Image from 'next/image';
import React from 'react';
import avatar from '@/assets/user.png'
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto'>
            <div></div>
            <ul className='flex justify-between items-center gap-4'>
                <li>
                    <Link href='/'>Home</Link>
                    </li>
                <li>
                    <Link href='/about-us'>About</Link>
                    </li>
                <li>
                    <Link href='/career'>Career</Link>
                    </li>
            </ul>
            <div>
                <Image src={avatar} alt='User Avatar' width={50} height={50}/>
                <button className='btn btn-info'><Link href='/login'>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;