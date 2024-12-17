
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/features/auth/components/UserButton";

import { getCurrent } from "@/features/auth/actions";
import { getWorkspaces } from "@/features/workspaces/actions";

import { CreateWorkspaceForm } from "@/features/workspaces/components/CreateWorkspaceForm";
import Test from "@/features/Test";

//import { createAdminClient } from "@/lib/appwrite";          // testing to see this in console means server-only isn't working in appwrite.ts

export default async function Home() {
  //console.log(createAdminClient, 'why are you here?');      // testing to see this in console means server-only isn't working in appwrite.ts

  const user = await getCurrent();
  if (!user) redirect('/sign-in')

  
  const workspaces = await getWorkspaces();
  if (workspaces.total === 0){
    redirect('workspaces/create')
  } else{
    redirect(`workspaces/${workspaces.documents[0].$id}`)
  }

  return (
    <div className="bg-blue-500 p-5 h-full">

      <div className="text-red-800 flex flex-col justify-center pb-2">
        <p className="text-4xl font-extrabold flex justify-center">This is the home page</p>
        <p className="font-extrabold flex justify-center">Seeing this means the workspace redirect doesn't work</p>
      </div>

      <div>
        <CreateWorkspaceForm />   {/* onCancel={()=>{}} */}
      </div>

      <Test />
    </div>
  )
}
