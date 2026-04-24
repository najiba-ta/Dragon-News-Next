import { format } from "date-fns";
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Header = () => {
    return (
        <div className='text-center py-8 space-y-2'>
           <Image src={logo} width={300} height={200} alt='logo' className='mx-auto'/>
           <p>Journalism Without Fear or Favour</p>
           <p>{format( Date(2014, 1, 11), "EEEE, MMM dd, yyyy")}</p>
          
        </div>
    );
};

export default Header;