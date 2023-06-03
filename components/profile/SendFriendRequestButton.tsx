'use client';

import { Database } from '@/lib/schema';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';

const SendFriendRequestButton = ({ userId }: { userId: string }) => {
  const supabase = createClientComponentClient<Database>();

  const handleSendRequest = async () => {
    await supabase.from('friend_requests').insert({ to_user: userId });
  };

  return (
    <button
      onClick={handleSendRequest}
      className='px-4 py-2 bg-white text-black rounded-full'
    >
      Send Friend Request
    </button>
  );
};

export default SendFriendRequestButton;
