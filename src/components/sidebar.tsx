import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { DottedSeparator } from './dotted-separator'
import { Navigation } from './navigation'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside className='h-full bg-slate-500 p-5 w-full'>
      <Link href='/'>
        <Image src='/logo.svg' alt='logo' width={150} height={50} />
      </Link>

      <DottedSeparator className='pt-2' />

      <Navigation />

    </aside>
  )
}

export default Sidebar