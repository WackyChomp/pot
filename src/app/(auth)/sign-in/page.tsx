
import { redirect } from 'next/navigation'
import { getCurrent } from '@/features/auth/actions'
import { SignInCard } from '@/features/auth/components/SignInCard'

type Props = {}

const SignInPage = async (props: Props) => {
  const user = await getCurrent();
  console.log ({ user })
  if (user) redirect('/')
  
  return (
    <div className='bg-red-500 p-2'>
      <SignInCard />
    </div>
  )
}

export default SignInPage