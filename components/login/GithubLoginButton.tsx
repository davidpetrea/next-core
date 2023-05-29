'use client';
import { Database } from '@/lib/schema';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { GithubIcon } from 'assets/SvgComponents';
import { useRouter } from 'next/navigation';
import React from 'react';

const GithubLoginButton = () => {
  const supabase = createClientComponentClient<Database>();

  const router = useRouter();
  const signInWithGithub = async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: 'github',
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
      onClick={signInWithGithub}
      className='border-gray-300 border rounded-full py-3 w-full hover:scale-105 hover:border-gray-100 transition-all duration-150 ease-linear'
    >
      <div className='flex justify-center gap-2'>
        <GithubIcon />
        Sign in with Github
      </div>
    </button>
  );
};

export default GithubLoginButton;
