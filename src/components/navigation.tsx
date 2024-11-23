
import React from 'react'

import Link from 'next/link'
import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill } from 'react-icons/go';
import { SettingsIcon, UsersIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type Props = {}

const routes = [
  {
    label: 'Home',
    href:'/',
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: 'My Tasks',
    href:'/tasks',
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: 'Settings',
    href:'/settings',
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: 'Members',
    href:'/members',
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
  // {
  //   label: 'Secret',
  //   href:'/secret',
  //   icon: UsersIcon,
  //   activeIcon: UsersIcon,
  // },
  // {
  //   label: '???',
  //   href:'',
  //   icon: '',
  //   activeIcon: '',
  // },
]

export const Navigation = (props: Props) => {
  return (
    <div className='flex flex-col'>
      {routes.map((item) => {
        const isActive = false;
        const Icon = isActive ? item.activeIcon : item.icon;

        return(
          <Link key={item.href} href={item.href}>
            <div className={ cn(
              'flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-yellow-500 transition text-black',
              isActive && 'bg-red-400 shadow-sm hover:opacity-100 text-red-600'
            )}>
              <Icon className='size-5 text-neutral-500' />
              {item.label}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
