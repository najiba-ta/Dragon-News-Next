'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,className,children}) => {
    const pathname = usePathname()
    console.log(pathname);
    const isActive = href === pathname
    return (
       <Link href={href} 
       className={`${className} ${isActive ? "border-b-2 border-blue-700" : ""}`}>{children}</Link>
    );
};

export default Navlink;