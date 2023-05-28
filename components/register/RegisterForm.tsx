'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@/components/common/TextField';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from 'utils/schemas';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/schema';
import type { SubmitHandler } from 'react-hook-form';

interface FormValues {
  email: string;
  password: string;
  name: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(RegisterSchema),
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');

  const supabase = createClientComponentClient<Database>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setVerificationMessage('');
    setErrorMessage('');
    const { email, password, name } = data;
    const { data: signUpData, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
        data: {
          name,
        },
      },
    });
    if (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    } else {
      if (signUpData?.user?.identities?.length === 0) {
        setErrorMessage(
          'This email is already used. Log in or use a different email to sign up.'
        );
        setVerificationMessage('');
      } else {
        setErrorMessage('');
        setVerificationMessage(
          'A verification link has been sent to your email address.'
        );
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-2 w-full max-w-[24rem]'
    >
      {verificationMessage && (
        <div className='text-sm text-green bg-neutral-900 border border-green rounded-md p-4'>
          {verificationMessage}
        </div>
      )}
      {errorMessage && (
        <div className='text-sm text-amaranth bg-neutral-900 border border-amaranth rounded-md p-4'>
          {errorMessage}
        </div>
      )}
      <TextField
        inputProps={{ ...register('email') }}
        id='email'
        label="What's your email?"
        placeholder='Enter your email...'
        error={errors?.email?.message?.toString()}
      />

      <TextField
        inputProps={{ ...register('password') }}
        id='password'
        label='Pick a password'
        placeholder='Enter your password...'
        error={errors?.password?.message?.toString()}
        type='password'
      />
      <TextField
        inputProps={{ ...register('name') }}
        id='name'
        label='Choose a display name'
        placeholder='Enter a profile name...'
        error={errors?.name?.message?.toString()}
      />
      <p className='text-xs text-center mt-8 mb-4'>
        By clicking on sign-up, you agree to Next Cores&apos;s Terms of Service.
      </p>
      <button
        type='submit'
        className='rounded-full px-8 py-4 bg-gradient-to-r from-green to-seablue text-black font-semibold hover:scale-105 transition-all duration-150 ease-linear active:brightness-75'
      >
        Sign up
      </button>
      <p className='text-center text-sm mt-8'>
        Already have an account?{' '}
        <Link href='/login' className='text-orange underline'>
          Log in.
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
