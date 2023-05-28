'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React from 'react';
import type { Database } from '@/lib/schema';

const SignOutButton = () => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };
  return (
    <button onClick={handleSignOut} className='text-amaranth'>
      Sign out
    </button>
  );
};

export default SignOutButton;
