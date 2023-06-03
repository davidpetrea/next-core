import { createClient } from '@supabase/supabase-js';
import { Database } from './schema';
import supabaseClient from '@/lib/supabaseClient';
type ElementType<T> = T extends (infer U)[] ? U : never;

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    db: {
      schema: 'public',
    },
  }
);

export async function getUserById(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('id,name,avatar_url')
    .eq('id', userId)
    .limit(1);
  return { data, error };
}

export async function getUsersByName(searchValue: string) {
  //Get current user info
  const { data } = await supabaseClient.auth.getSession();

  //Get all users that match searchValue except current user
  return await supabase
    .from('users')
    .select('name,avatar_url,id')
    .neq('id', `${data.session?.user?.id}`)
    .ilike('name', `%${searchValue}%`)
    .limit(10);
}

type UsersResponse = Awaited<ReturnType<typeof getUsersByName>>;
export type UsersResponseSuccess = UsersResponse['data'];
export type UsersResponseError = UsersResponse['error'];

export type User = ElementType<UsersResponseSuccess>;
