'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import Test from "@/features/Test";
import { UserButton } from "@/features/auth/components/UserButton";

//import { createAdminClient } from "@/lib/appwrite";          // testing to see this in console means server-only isn't working in appwrite.ts
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";

export default function Home() {
  //console.log(createAdminClient, 'why are you here?');      // testing to see this in console means server-only isn't working in appwrite.ts

  {/*
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {             // logging out: useCurrent becomes null and this triggers
    if (!data && !isLoading){
      router.push('/sign-in')
    }
  }, [data])
  */}

  return (
    <div className="bg-blue-500 flex justify-center">

      <div className="bg-green-600 flex flex-col">

      <div className="flex flex-col mx-auto items-center">
        <div className="">POT ON TIME</div>
        <Test />
        <Button><Link href='/sign-in'>Sign In</Link></Button>
        <Button><Link href='/sign-up'>Sign Up</Link></Button>
      </div>

      <div className="flex items-center gap-4 p-4">
        <Button variant='default'>Button #1</Button>
        <Button variant='destructive' size='sm'>Button #2</Button>
        <Button variant='outline' size='lg'>Button #3</Button>
        <Button variant='secondary' size='sm'>Button #4</Button>
        <Button variant='ghost' size='lg'>Button #5</Button>
        <Button variant='mystery' size='xs'>Button #6</Button>
      </div>

      <Input />

      <Button onClick={() => mutate()}>Logout Now</Button>    {/* uses mutate and useEffect , need to uncomment above */}

      <UserButton />
      </div>
    </div>
  )
}
