import { cookies } from 'next/headers';
import { Database } from '@/lib/schema';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Login | Next Core',
  description: 'The Next Core chatting experience.',
};

export default async function Login() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect('/');
  }

  return <div> Login page</div>;
}
