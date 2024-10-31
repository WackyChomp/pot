'use client'

import { SignUpCard } from '@/features/auth/components/SignUpCard'

type Props = {}

const SignUpPage = (props: Props) => {
  return (
    <div className='bg-yellow-500 p-5'>
      <SignUpCard />
    </div>
  )
}

export default SignUpPage