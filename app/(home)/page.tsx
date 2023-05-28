import Login from '@/components/Login';
import ServerComponent from '@/components/ServerCoimponent';

export const revalidate = 0;

export default async function Home() {

  //TODO:logged in/out separeate views
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-4 py-24 md:p-24'>
      <h1 className='text-3xl text-center'>Welcome to Next Core</h1>
      <div className='flex flex-col gap-2'>
        <Login />
      </div>
      {/* @ts-expect-error Async Server Component */}
      <ServerComponent />
    </main>
  );
}
