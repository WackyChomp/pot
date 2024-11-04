'use client'

import Image from "next/image"
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignIn = pathname === '/sign-in'
  
  return (
    <main className="bg-gray-600 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-7">

        <nav className="bg-green-600 flex justify-between items-center p-1.5">
          <Image src='/logo.svg' height={30} width={30} alt='logo'/>
          <Button variant='secondary'>
           <Link href={isSignIn ? '/sign-up' : '/sign-in'}>
            {isSignIn ? 'Sign Up' : 'Login'}
           </Link> 
          </Button>
        </nav>

        <div className="flex flex-col items-center justify-center pt-8 md:pt-16">
          {children}
        </div>

      </div>
    </main>
  )
}

export default AuthLayout