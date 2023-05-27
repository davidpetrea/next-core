import { supabase } from '@/lib/supabase';
import Login from '@/components/Login';
import ServerComponent from '@/components/ServerCoimponent';

export const revalidate = 0;

export default async function Home() {
  const data = await supabase.from('users').select('id');

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-3xl'>Welcome to Next Core</h1>
      <div className='flex flex-col gap-2'>
        <Login />
      </div>
      {/* @ts-expect-error Async Server Component */}
      <ServerComponent />
    </main>
  );
}
