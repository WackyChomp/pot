'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { DottedSeparator } from "@/components/dotted-separator"

import { LogOut } from "lucide-react"

import { useLogout } from "../api/use-logout"
import { useCurrent } from "../api/use-current"


type Props = {}

export const UserButton = (props: Props) => {
  const { data: user, isLoading } = useCurrent();
  const { mutate: logout } = useLogout();

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

  const avatarFallback = name
    ? name.charAt(0).toUpperCase()
    : email.charAt(0).toUpperCase() ?? 'U';

  return(
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-20 hover:opacity-80 transition border border-green-600">
          <AvatarFallback className="bg-red-400 font-medium text-blue-600 flex items-center justify-center">
            {avatarFallback}
            <div className="text-red-600">User Button Here</div>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' side='bottom' className="w-84" sideOffset={10}>
        <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-6">
          <Avatar className="size-16 hover:opacity-80 transition border border-green-600">
            <AvatarFallback className="bg-yellow-400 text-xl font-medium text-blue-800 flex items-center justify-center">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium text-orange-600">
              {name || 'user'}
            </p>
            <p className="text-sm text-blue-600">{email}</p>
          </div>
        </div>

        <DottedSeparator className="mb-4" />

        <DropdownMenuItem 
          className="bg-red-200 h-12 flex items-center justify-center text-orange-600 font-medium cursor-pointer"
          onClick={() => logout()}
        >
          <LogOut className='size-6 mr-4'/>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
      
  )
}