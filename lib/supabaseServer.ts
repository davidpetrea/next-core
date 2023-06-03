import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from './schema';

export const supabase = createServerComponentClient<Database>({ cookies });

export async function getFriendRequestStatusByUser(userId: string) {
  //Get current user info
  const { data: currentUser } = await supabase.auth.getSession();
  const { data, error } = await supabase
    .from('friend_requests')
    .select('from_user,to_user')
    .or(
      `and(from_user.eq.${currentUser?.session?.user?.id},to_user.eq.${userId}),and(to_user.eq.${currentUser?.session?.user.id},from_user.eq.${userId})`
    )
    .limit(1);
  return { data, error };
}

export async function getRelationshipWithUser(userId: string) {
  //Get current user info
  const { data: currentUser } = await supabase.auth.getSession();
  const { data, error } = await supabase
    .from('relationships')
    .select('user_one, user_two')
    .or(
      `and(user_one.eq.${currentUser?.session?.user.id},user_two.eq.${userId}),and(user_two.eq.${currentUser?.session?.user.id},user_one.eq.${userId})`
    )
    .limit(1);
  return { data, error };
}
