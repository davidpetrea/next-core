import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import React from 'react';
import type { Database } from '@/lib/schema';
import Image from 'next/image';

export const revalidate = 0;

export default async function Header() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data } = await supabase.auth.getSession();

  //if not logged in, display sign up/sign in buttons

  let authPanel;
  if (!data.session) {
    authPanel = (
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
    const { data: currentUser } = await supabase
      .from('users')
      .select('*')
      .eq('id', data.session?.user.id);

    authPanel = (
      <div className='flex items-center gap-4'>
        {currentUser && currentUser?.length > 0 && (
          <div className='flex items-center gap-2'>
            <div>{currentUser[0].name}</div>
            <div>
              <Image
                src={currentUser[0].avatar_url}
                className='rounded-full'
                width={40}
                height={40}
                alt='Avatar'
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <header className='bg-neutral-800 px-8 py-4 flex justify-between items-center gap-4 sticky top-0'>
      <div>Home</div>
      {authPanel}
    </header>
  );
}
