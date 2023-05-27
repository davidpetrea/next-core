import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Database } from '@/lib/schema';

export default async function ServerComponent() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: userSession } = await supabase.auth.getSession();
  return (
    <div>
      {userSession.session ? (
        <div className='max-w-5xl'>
          Logged in as: {userSession.session?.user.email}
        </div>
      ) : (
        <div>Sign in</div>
      )}
    </div>
  );
}
