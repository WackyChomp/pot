import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { DottedSeparator } from '@/components/dotted-separator'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

export const SignInCard = () =>{
  const geminiIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNyb3NzIj48cGF0aCBkPSJNMTEgMmEyIDIgMCAwIDAtMiAydjVINGEyIDIgMCAwIDAtMiAydjJjMCAxLjEuOSAyIDIgMmg1djVjMCAxLjEuOSAyIDIgMmgyYTIgMiAwIDAgMCAyLTJ2LTVoNWEyIDIgMCAwIDAgMi0ydi0yYTIgMiAwIDAgMC0yLTJoLTVWNGEyIDIgMCAwIDAtMi0yaC0yeiIvPjwvc3ZnPg==`

  return(
    <Card className="w-full h-full md:w-[490px] border-none shadow-none">
      <CardHeader className='flex items-center justify-center text-center p-10'>
        <CardTitle className='text-3xl'>
          Welcome To HERE Domain!!!
        </CardTitle>
      </CardHeader>

      <div className="px-12">
        <DottedSeparator />
      </div>
      
      <CardContent className="p-12">
        <form className='space-y-4'>
          <Input 
            required
            type='email'
            value={''}
            onChange={() => {}}
            placeholder='Enter your email address'
            disabled={false}
          />
          <Input 
            required
            type='password'
            value={''}
            onChange={() => {}}
            placeholder='Enter your password'
            disabled={false}
            min={8}
            max={256}
          />
          <Button disabled={false} variant='mystery' size='lg' className='w-full'>
            Login
          </Button>
        </form>
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

    </Card>
  )
}