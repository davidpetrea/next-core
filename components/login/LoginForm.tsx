'use client';

import { Database } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginSchema } from 'utils/schemas';
import TextField from '@/components/common/TextField';
import { useRouter } from 'next/navigation';

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(LoginSchema),
  });

  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [showResendLink, setShowResendLink] = useState(false);
  const [resendEmail, setResendEmail] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');

  const supabase = createClientComponentClient<Database>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { email, password } = data;
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(
        error.message ?? 'Something went wrong. Please try again later.'
      );
      if (error.message === 'Email not confirmed') {
        setResendEmail(email);
        setShowResendLink(true);
      }
    } else {
      router.push('/');
    }
  };

  const handleResend = async (email: string) => {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
    });

    if (!error) {
      setShowResendLink(false);
      setErrorMessage('');
      setVerificationMessage(
        'A new verification link has been sent to your email.'
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-2 w-full max-w-[24rem] my-4'
    >
      {verificationMessage && (
        <div className='text-sm text-green bg-neutral-900 border border-green rounded-md p-4'>
          {verificationMessage}
        </div>
      )}
      {errorMessage && (
        <div className='text-sm text-amaranth bg-neutral-900 border border-amaranth rounded-md p-4'>
          {errorMessage}
          {showResendLink && resendEmail && (
            <button
              className='text-orange underline ml-2'
              onClick={() => handleResend(resendEmail)}
            >
              Resend link
            </button>
          )}
        </div>
      )}

      <TextField
        inputProps={{ ...register('email') }}
        id='email'
        label='Email'
        placeholder='Enter your email...'
        error={errors?.email?.message?.toString()}
      />

      <TextField
        inputProps={{ ...register('password') }}
        id='password'
        label='Password'
        placeholder='Enter your password...'
        error={errors?.password?.message?.toString()}
        type='password'
      />

      <button
        type='submit'
        className='rounded-full px-8 py-3 my-4 bg-gradient-to-r from-green to-seablue text-black font-semibold hover:scale-105 transition-all duration-150 ease-linear active:brightness-75'
      >
        Log in
      </button>
      <button className='underline'>Forgot your password?</button>
    </form>
  );
};

export default LoginForm;
