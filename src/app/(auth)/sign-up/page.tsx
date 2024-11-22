
import { redirect } from 'next/navigation';
import { getCurrent } from '@/features/auth/actions';
import { SignUpCard } from '@/features/auth/components/SignUpCard'

type Props = {}

const SignUpPage = async (props: Props) => {
  const user = await getCurrent();
  if (user) redirect('/')

  return (
    <div className='bg-yellow-500 p-5'>
      <SignUpCard />
    </div>
  )
}

export default SignUpPage