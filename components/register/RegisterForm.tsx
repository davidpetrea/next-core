'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '../common/TextField';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from 'utils/schemas';
import Link from 'next/link';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className='flex flex-col gap-2 w-full max-w-[24rem]'
    >
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
      <p className='text-center text-sm'>
        Already have an account?{' '}
        <Link href='/login' className='text-orange underline'>
          Log in.
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
