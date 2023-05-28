import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='px-8 py-4 bg-gradient-to-r from-green to-seablue flex justify-between items-center gap-4'>
      <div className='text-black font-semibold'>Preview of the Next Core</div>
      <Link href='/signup' className='shrink-0'>
        <button className='transition-all duration-150 hover:scale-105 group'>
          <span className='bg-gray-200 group-hover:bg-gray-100 px-8 py-2 rounded-full transition-color duration-150 text-black font-semibold'>
            Sign up free
          </span>
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
