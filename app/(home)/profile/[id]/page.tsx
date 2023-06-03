import { cookies } from 'next/headers';
import SendFriendRequestButton from '@/components/profile/SendFriendRequestButton';
import UserCard from '@/components/search/UserCard';
import { Database } from '@/lib/schema';
import { getUserById } from '@/lib/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

import React from 'react';
import AcceptFriendRequestButton from '@/components/profile/AcceptFriendRequestButton';
import {
  getFriendRequestStatusByUser,
  getRelationshipWithUser,
} from '@/lib/supabaseServer';

const Profile = async ({ params }: { params: { id: string } }) => {
  const supabaseServer = createServerComponentClient<Database>({ cookies });
  //Get current user info
  const { data: currentUser } = await supabaseServer.auth.getSession();

  const getFriendRequest = getFriendRequestStatusByUser(params.id);
  const getRelationship = getRelationshipWithUser(params.id);
  const getUser = getUserById(params.id);

  const [{ data: requests }, { data: relationship }, { data }] =
    await Promise.all([getFriendRequest, getRelationship, getUser]);

  if (!data || !requests) {
    return <div>No user found.</div>;
  }

  return (
    <div className='p-4'>
      {/* TODO: User panel */}
      <UserCard user={{ ...data[0] }} />
      {/* TODO: Check if already friends */}
      {requests.length === 0 && !relationship?.[0] && (
        <SendFriendRequestButton userId={params.id} />
      )}
      {relationship?.length !== 0 && <div>Already friends</div>}
      {requests[0]?.from_user === currentUser.session?.user.id && (
        <div>Pending request</div>
      )}
      {requests[0]?.to_user === currentUser.session?.user.id && (
        <AcceptFriendRequestButton
          userId={params.id}
          currentUserId={currentUser.session.user.id}
        />
      )}
    </div>
  );
};

export default Profile;
