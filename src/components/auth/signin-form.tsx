'use client';

import Link from 'next/link';
import * as z from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Routes } from '@/config/routes';
import Input from '@/components/ui/form-fields/input';
import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/form-fields/checkbox';
import useAuth from '@/hooks/use-auth';
import { useModal } from '@/components/modals/context';
import { loginSchema } from '@/schemas';
import { signin } from 'actions/signin';
import { FormError } from '../ui/errors/form-error';
import { FormSuccess } from '../ui/errors/form-success';
import { startTransition, useState } from 'react';


type SignInType = z.infer<typeof loginSchema>;

export default function SigninForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");


  const { authorize } = useAuth();
  const { closeModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setError("");
    setSuccess("");



    startTransition(() => {
      signin(values)
      .then((data) => {
        setError(data.error);
        setSuccess(data.success);

      })
    })
  };
    
  //   authorize();
  //   closeModal();
  

  // const onSubmit:SubmitHandler<SignInType> = async (data) => {
    
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   signin(values);  
  
  //   authorize();
  //   closeModal();

  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Email"
        className="mb-4"
        error={errors?.email?.message}
        required
        {...register('email')}
      />
      <Input
        type="password"
        label="Password"
        className="mb-4"
        error={errors?.password?.message}
        required
        {...register('password')}
      />
      <div className="mb-7 flex items-center justify-between">
        <Checkbox
          size="sm"
          label="Remember Me"
          labelClassName="ml-2"
          inputClassName="!text-gray-dark"
          {...register('remember')}
        />
        <Link
          href={Routes.auth.forgotPassword}
          className="  text-sm font-semibold leading-6 text-primary underline"
        >
          Forget Password?
        </Link>
      </div>
      <FormError message={error}/>
      <FormSuccess message={success}/>
      <Button disabled={isSubmitting} type="submit" className="mb-2 w-full" size="xl">
        {isSubmitting? "Loading..." : "Submit"}
      </Button>
      <p className="text-sm font-semibold leading-6 text-gray">
        Not member yet?{' '}
        <Link href={Routes.auth.signUp} className="text-primary underline">
          Create an account
        </Link>
      </p>
      <div className="relative mb-8 mt-7 text-center before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:bg-gray-200">
        <span className="relative z-10 m-auto inline-flex bg-white px-5">
          Or
        </span>
      </div>
    </form>
  );
}
