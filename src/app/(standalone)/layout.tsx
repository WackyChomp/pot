import Link from "next/link";
import Image from "next/image";

import { UserButton } from "@/features/auth/components/UserButton";

interface Props {
  children: React.ReactNode;
}

const StandaloneLayout = ({ children }: Props) => {
  return (
    <main className='bg-yellow-300 min-h-screen'>
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className='flex justify-between items-center h-[80px]'>
          <Link href='/'>
            <Image src='/logo.svg' alt='logo' height={70} width={70} />
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center py-6">
          {children}
        </div>
      </div>
    </main>
  )
}

export default StandaloneLayout