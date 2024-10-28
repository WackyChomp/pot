'use client'

import React from 'react'
import { SignInCard } from '@/features/auth/components/SignInCard'

type Props = {}

const SignInPage = (props: Props) => {
  return (
    <div className='bg-red-500 p-2'>
      <SignInCard />
    </div>
  )
}

export default SignInPage