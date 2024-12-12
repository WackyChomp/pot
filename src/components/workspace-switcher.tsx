'use client'

import { RiAddCircleFill } from 'react-icons/ri'; 

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { WorkspaceAvatar } from '@/features/workspaces/components/WorkspaceAvatar';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Button that lets you switch between different workspaces

export const WorkspaceSwitcher = () => {
  const { data, data:workspaces } = useGetWorkspaces();

  return (
    <div className="flex flex-col gap-y-5">
      <p className='text-red-600 text-xs font-semibold'>
        Total workspaces: {data?.total}      {/* JSON.stringify(data) */}
      </p>

      <div className="flex items-center justify-between">
        <p className='text-xs uppercase text-red-600'>
          Switcheroo
        </p>
        <RiAddCircleFill className='size-8 text-blue-800 cursor-pointer hover:opacity-80 transition' />
      </div>

      <Select>
        <SelectTrigger className='w-full bg-gray-500 font-medium p-6'>
          <SelectValue placeholder='No workspace selected' />
        </SelectTrigger>
        <SelectContent className='bg-green-500'>
          {workspaces?.documents.map((workspace) => (
            <SelectItem key={workspace.$id} value={workspace.$id}>
              <div className="bg-red-300 flex flex-row justify-start items-center gap-5 font-medium rounded-md">
                <WorkspaceAvatar name={workspace.name} image={workspace.imageUrl} />
                <span className='bg-yellow-300 truncate'>{workspace.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}