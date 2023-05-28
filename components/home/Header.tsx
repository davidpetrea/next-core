import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import React from 'react';
import SignOutButton from '@/components/home/SignOutButton';
import type { Database } from '@/lib/schema';

const Header = () => {
  return (
    <header className='bg-neutral-800 px-8 py-4 flex justify-between gap-4 sticky top-0'>
      <div>Home</div>
      {/* @ts-expect-error Async Server Component */}
      <AuthPanel />
    </header>
  );
};

const AuthPanel = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data } = await supabase.auth.getSession();

  //if not logged in, display sign up/sign in buttons

  if (!data.session) {
    return (
      <div className='flex gap-4 items-center'>
        <Link href='signup '>
          <button className='text-gray-300 hover:text-gray-200 transition-all hover:scale-105'>
            Sign up
          </button>
        </Link>
        <Link href='login'>
          <button className='transition-all duration-150 hover:scale-105 group'>
            <span className='bg-gray-300 group-hover:bg-gray-100 px-8 py-2 rounded-full transition-color duration-150 text-black font-semibold'>
              Log in
            </span>
          </button>
        </Link>
      </div>
    );
  }
  if (data.session) {
    return (
      <div className='flex items-center gap-4'>
        {data.session.user.user_metadata.name} <SignOutButton />
      </div>
    );
  }
};

export default Header;
