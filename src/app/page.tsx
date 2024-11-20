
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/features/auth/components/UserButton";
import Test from "@/features/Test";
import { getCurrent } from "@/features/auth/actions";

//import { createAdminClient } from "@/lib/appwrite";          // testing to see this in console means server-only isn't working in appwrite.ts

export default async function Home() {
  //console.log(createAdminClient, 'why are you here?');      // testing to see this in console means server-only isn't working in appwrite.ts

  const user = await getCurrent();
  if (!user) redirect('/sign-in')

  return (
    <div className="bg-blue-500 flex justify-center">

      <div className="bg-green-600 flex flex-col">

      <div className="flex flex-col mx-auto items-center gap-2">
        <div className="">POT ON TIME</div>
        <Test />
        <div className="flex gap-3">
          <Button><Link href='/sign-in'>Sign In</Link></Button>
          <Button><Link href='/sign-up'>Sign Up</Link></Button>
        </div>
      </div>

      <UserButton />
      </div>
    </div>
  )
}
