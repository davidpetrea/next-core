import { cookies } from 'next/headers';
import Header from '@/components/home/Header';
import Sidebar from '@/components/home/Sidebar';
import { Database } from '@/lib/schema';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Footer from '@/components/home/Footer';

export const metadata = {
  title: 'Next Core ',
  description: 'The Next Core chatting experience.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data } = await supabase.auth.getSession();
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex grow'>
        <Sidebar />
        <div className='flex flex-col flex-grow shrink-0'>
          {/* @ts-expect-error Async Server Component */}
          <Header />
          <div className='bg-neutral-900 grow'>{children}</div>
        </div>
      </main>
      {!data.session && <Footer />}
    </div>
  );
}
