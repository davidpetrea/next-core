'use client';
import { Database } from '@/lib/schema';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React from 'react';

const DiscordLoginButton = () => {
  const supabase = createClientComponentClient<Database>();

  const router = useRouter();
  const signInWithDiscord = async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
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
      onClick={signInWithDiscord}
      className='border-gray-100 border rounded-full py-3 w-full'
    >
      Sign in with Discord
    </button>
  );
};

export default DiscordLoginButton;
