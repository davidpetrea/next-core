'use client';

import { Database } from '@/lib/schema';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';

const AcceptFriendRequestButton = ({
  userId,
  currentUserId,
}: {
  userId: string;
  currentUserId: string;
}) => {
  const supabase = createClientComponentClient<Database>();

  const handleSendRequest = async () => {
    await supabase
      .from('friend_requests')
      .update({ status: 1 })
      .match({ from_user: userId, to_user: currentUserId });
  };

  return (
    <button
      onClick={handleSendRequest}
      className='px-4 py-2 bg-white text-black rounded-full'
    >
      Accept friend request
    </button>
  );
};

export default AcceptFriendRequestButton;
