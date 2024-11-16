'use client'

import { DottedSeparator } from "@/components/dotted-separator"
import { useLogout } from "../api/use-logout"
import { useCurrent } from "../api/use-current"


type Props = {}

export const UserButton = (props: Props) => {
  const { data: user, isLoading } = useCurrent();

  if(isLoading){
    return (
      <div className="bg-pink-500 border border-yellow-600 size-20 rounded-full flex items-center justify-center">
        <div className="animate-spin">Loading</div>
      </div>
    );
  }

  if(!user){
    return null;
  }

  const { name, email } = user;

  return(
    <div className="">User Button Here</div>
  )
}