'use client';
import { Database } from '@/lib/schema';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { GoogleIcon } from 'assets/SvgComponents';
import { useRouter } from 'next/navigation';
import React from 'react';

const GoogleLoginButton = () => {
  const supabase = createClientComponentClient<Database>();

  const router = useRouter();
  const signInWithGoogle = async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (data) {
      router.refresh();
    }
  };
  return (
    <button
      onClick={signInWithGoogle}
      className='border-gray-300 border rounded-full py-3 w-full hover:scale-105 hover:border-gray-100 transition-all duration-150 ease-linear'
    >
      <div className='flex justify-center gap-2'>
        <GoogleIcon />
        Sign in with Google
      </div>
    </button>
  );
};

export default GoogleLoginButton;
