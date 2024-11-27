
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/features/auth/components/UserButton";
import { getCurrent } from "@/features/auth/actions";

import { CreateWorkspaceForm } from "@/features/workspaces/components/CreateWorkspaceForm";
import Test from "@/features/Test";

//import { createAdminClient } from "@/lib/appwrite";          // testing to see this in console means server-only isn't working in appwrite.ts

export default async function Home() {
  //console.log(createAdminClient, 'why are you here?');      // testing to see this in console means server-only isn't working in appwrite.ts

  const user = await getCurrent();
  if (!user) redirect('/sign-in')

  return (
    <div className="bg-blue-500 p-5 h-full">

      <p className="text-red-800 text-4xl font-extrabold flex justify-center">This is the home page</p>

      <div>
        <CreateWorkspaceForm />   {/* onCancel={()=>{}} */}
      </div>

      <Test />
    </div>
  )
}
