import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


type Props = {}

const Test = (props: Props) => {
  return (
    <div className="bg-purple-600 flex flex-col items-center m-4 rounded-xl">

    <div className="flex flex-col justify-center">
      <div className='text-yellow-400 font-extrabold pt-2 flex flex-col items-center'>Test is all I do here</div>
      <div className="bg-green-600 flex flex-col items-center rounded-md">
        <div className="flex flex-col mx-auto items-center gap-2">
          <div className="flex gap-3 p-3">
            <Button><Link href='/sign-in'>Sign In</Link></Button>
            <Button><Link href='/sign-up'>Sign Up</Link></Button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-orange-700 m-4 rounded-md">
      <div className="grid grid-cols-3 gap-4 items-center p-4">
        <Button variant='default'>Button #1</Button>
        <Button variant='destructive' size='sm'>Button #2</Button>
        <Button variant='outline' size='lg'>Button #3</Button>
        <Button variant='secondary' size='sm'>Button #4</Button>
        <Button variant='ghost' size='lg'>Button #5</Button>
        <Button variant='mystery' size='xs'>Button #6</Button>
      </div>
    </div>

    </div>
  )
}

export default Test