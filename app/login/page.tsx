import { cookies } from 'next/headers';
import { Database } from '@/lib/schema';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import LoginForm from '@/components/login/LoginForm';
import Link from 'next/link';
import DiscordLoginButton from '@/components/login/DiscordLoginButton';
import GithubLoginButton from '@/components/login/GithubLoginButton';
import GoogleLoginButton from '@/components/login/GoogleLoginButton';

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

  return (
    <main className='min-h-screen flex flex-col gap-4 justify-center items-center p-4 md:p-24'>
      <h2 className='text-3xl font-bold text-center'>Log in to Next Core</h2>
      {/* Auth providers */}
      <div className='flex flex-col my-8 items-center gap-2 w-full max-w-[24rem]'>
        <DiscordLoginButton />
        <GithubLoginButton />
        <GoogleLoginButton />
      </div>
      <div className='bg-gradient-to-r from-green to-seablue w-full h-0.5 rounded-full max-w-[36rem]' />

      <LoginForm />

      <div className='bg-gradient-to-r from-green to-seablue w-full h-0.5 rounded-full max-w-[36rem]' />
      <p className='text-center text-sm mt-8'>
        Don&apos;t have an account yet?{' '}
        <Link href='/signup' className='text-orange underline'>
          Sign up for free.
        </Link>
      </p>
    </main>
  );
}
