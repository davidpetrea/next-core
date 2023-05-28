import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <nav className='w-[16rem] shrink-0 pt-6 flex flex-col max-h-screen'>
      <div className='mb-6 px-6 text-xl'>Next Core</div>
      <ul>
        <li className='px-2 '>
          <Link href='/' className='flex hover:text-orange'>
            Home
          </Link>
        </li>
        <li className='px-2'>Search</li>
        <li className='px-2'>Your posts</li>
        <li className='px-2'>Messages</li>
      </ul>
      <ul className='grow mt-6'>
        <li className='px-2'>User custom link 1</li>
        <li className='px-2'>User custom link 2</li>
        <li className='px-2'>User custom link 3</li>
      </ul>
      <div className='my-8'>
        <div className='px-4'>Theme button</div>
      </div>
    </nav>
  );
};

export default Sidebar;
