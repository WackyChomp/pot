import Image from 'next/image'
import Link from 'next/link'

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

import { DottedSeparator } from '@/components/dotted-separator'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const formSchema = z.object({
  name: z.string().trim().min(3, 'Required'),
  email: z.string().email(),
  password: z.string().min(8, "Minium 8 characters"),
})

export const SignUpCard = () =>{
  const geminiIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNyb3NzIj48cGF0aCBkPSJNMTEgMmEyIDIgMCAwIDAtMiAydjVINGEyIDIgMCAwIDAtMiAydjJjMCAxLjEuOSAyIDIgMmg1djVjMCAxLjEuOSAyIDIgMmgyYTIgMiAwIDAgMCAyLTJ2LTVoNWEyIDIgMCAwIDAgMi0ydi0yYTIgMiAwIDAgMC0yLTJoLTVWNGEyIDIgMCAwIDAtMi0yaC0yeiIvPjwvc3ZnPg==`

  const form = useForm<z.infer<typeof formSchema>> ({
    resolver: zodResolver(formSchema),
    defaultValues:{
      name: "",
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) =>{
    console.log({ values });
  }

  return(
    <Card className="w-full h-full md:w-[490px] border-none shadow-none">
      <CardHeader className='flex items-center justify-center text-center p-10'>
        <CardTitle className='text-3xl capitalize'>
          New here? Join the cause
        </CardTitle>
        <CardDescription className='bg-slate-950 rounded-md p-2'>
          By signing up, you unfortunately relinquish your will and submit to our {" "}
          <Link href='/privacy'>
            <span className='text-red-500 animate-pulse hover:underline font-semibold'>Privacy Policy</span>
          </Link>
          {" "} and {" "}
          <Link href='/terms'>
            <span className='text-blue-500 animate-pulse hover:underline font-semibold'>Terms of Service</span>
          </Link>
        </CardDescription>
        <CardDescription className='bg-slate-950 rounded-md p-2'>
          Have an account? {" "}          
          <Link href='/sign-in' className='text-yellow-400 animate-pulse'>Sign in</Link>
        </CardDescription>
      </CardHeader>

      <div className="px-12">
        <DottedSeparator color='red' />
      </div>
      
      <CardContent className="p-12">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            name='name'
            control={form.control}
            render={({ field }) =>(
              <FormItem>
                <FormControl>                  
                  <Input 
                    {...field}
                    type='text'
                    placeholder='Enter your name'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <Button disabled={false} variant='success' size='lg' className='w-full'>
            Login
          </Button>
        </form>
        </Form>
      </CardContent>

      <div className="px-7">
        <DottedSeparator color='red' />
      </div>

      <CardContent className='flex flex-col p-7 gap-y-10'>
        <Button disabled={false} variant='success' size='lg' className='w-full'>
          <FcGoogle className='mr-2 size-5' />
          Login with GooGoo
        </Button>
        <Button disabled={false} variant='default' size='lg' className='w-full'>
          <FaGithub className='text-green-600 mr-2 size-5 animate-pulse' />
          Login with GitHub
        </Button>
        <Button disabled={false} variant='success' size='lg' className='w-full animate-bounce'>
          <Image src={geminiIcon} alt='icon' width={15} height={15} className='bg-yellow-400 rounded-lg animate-spin' />
          Login with Gemini<span className='text-[7px] -rotate-6 p-4 scale-x-[-1]'>{`(how does that work)?`}</span>
        </Button>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className='p-7 flex items-center justify-center'>
        <p>
          Already have an account?
          <Link href='/sign-up' className='text-blue-700'>
          <span className='px-2'>Sign In</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}