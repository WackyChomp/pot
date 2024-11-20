'use client'

import Image from 'next/image'
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

import { DottedSeparator } from '@/components/dotted-separator'

import { loginSchema } from '../schemas';
import { useLogin } from '../api/use-login'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'


export const SignInCard = () =>{
  const geminiIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNyb3NzIj48cGF0aCBkPSJNMTEgMmEyIDIgMCAwIDAtMiAydjVINGEyIDIgMCAwIDAtMiAydjJjMCAxLjEuOSAyIDIgMmg1djVjMCAxLjEuOSAyIDIgMmgyYTIgMiAwIDAgMCAyLTJ2LTVoNWEyIDIgMCAwIDAgMi0ydi0yYTIgMiAwIDAgMC0yLTJoLTVWNGEyIDIgMCAwIDAtMi0yaC0yeiIvPjwvc3ZnPg==`

  const { mutate } = useLogin();

  const form = useForm<z.infer<typeof loginSchema>> ({
    resolver: zodResolver(loginSchema),
    defaultValues:{
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof loginSchema>) =>{
    console.log({ values });
    mutate({ json: values })
  }

  return(
    <Card className="w-full h-full md:w-[490px] border-none shadow-none">
      <CardHeader className='flex items-center justify-center text-center p-10'>
        <CardTitle className='text-3xl'>
          Welcome To HERE Domain!!!
        </CardTitle>
        <CardDescription className='bg-slate-950 rounded-md p-2'>
          Need an account? {" "}          
          <Link href='/sign-up' className='text-yellow-400 animate-pulse'>Sign Up</Link>
        </CardDescription>
      </CardHeader>

      <div className="px-12">
        <DottedSeparator />
      </div>
      
      <CardContent className="p-12">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            name='email'
            control={form.control}
            render={({ field }) =>(
              <FormItem>
                <FormControl>                  
                  <Input 
                    {...field}
                    type='email'
                    placeholder='Enter your email address'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name='password'
            control={form.control}
            render={({ field }) =>(
              <FormItem>
                <FormControl>                  
                  <Input 
                    {...field}
                    type='password'
                    placeholder='Enter your password'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={false} variant='mystery' size='lg' className='w-full'>
            Login
          </Button>
        </form>
        </Form>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className='flex flex-col p-7 gap-y-10'>
        <Button disabled={false} variant='mystery' size='lg' className='w-full'>
          <FcGoogle className='mr-2 size-5' />
          Login with GooGoo
        </Button>
        <Button disabled={false} variant='mystery' size='lg' className='w-full'>
          <FaGithub className='text-green-600 mr-2 size-5' />
          Login with GitHub
        </Button>
        <Button disabled={false} variant='mystery' size='lg' className='w-full animate-bounce'>
          <Image src={geminiIcon} alt='icon' width={15} height={15} className='bg-yellow-400 rounded-lg animate-spin' />
          Login with Gemini<span className='text-[7px] -rotate-6 p-4 scale-x-[-1]'>{`(how does that work)?`}</span>
        </Button>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className='p-7 flex items-center justify-center'>
        <p>
          Do not have an account?
          <Link href='/sign-up' className='text-blue-700'>
          <span className='px-2'>Sign Up</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}