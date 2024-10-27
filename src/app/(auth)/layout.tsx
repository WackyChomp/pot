import Image from "next/image"
import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="bg-gray-600 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-7">

        <nav className="bg-green-600 flex justify-between items-center p-1.5">
          <Image src='/logo.svg' height={30} width={30} alt='logo'/>
          <Button variant='secondary'>
            Sign Up
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