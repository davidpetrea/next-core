import { createClient } from '@supabase/supabase-js';
import { Database } from './schema';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

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

export async function getUsersByName(searchValue: string) {
  const client = createClientComponentClient<Database>();

  //Get current user info
  const { data } = await client.auth.getSession();

  //Get all users that match searchValue except current user
  return await supabase
    .from('users')
    .select('*')
    .neq('id', `${data.session?.user?.id}`)
    .ilike('name', `%${searchValue}%`)
    .limit(10);
}

type UsersResponse = Awaited<ReturnType<typeof getUsersByName>>;
export type UsersResponseSuccess = UsersResponse['data'];
export type UsersResponseError = UsersResponse['error'];

export type User = ElementType<UsersResponseSuccess>;
