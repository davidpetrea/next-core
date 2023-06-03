import Link from 'next/link';
import React from 'react';
import type { User } from '@/lib/supabase';
import Image from 'next/image';

const UserCard = ({ user }: { user: User }) => {
  return (
    <Link href={`/profile/${user.id}`}>
      <div className='bg-neutral-900 hover:bg-neutral-800 rounded-md p-4 flex flex-col items-center shadow-dp04 transition-all duration-150 ease-in-out'>
        <Image
          src={user.avatar_url!}
          width={48}
          height={48}
          alt='Avatar'
          className='w-24 rounded-full shadow-dp04 border border-neutral-900'
        />
        <h1 className='mt-4'>{user.name}</h1>
        <div className='text-gray-500'>User</div>
      </div>
    </Link>
  );
};

export default UserCard;
