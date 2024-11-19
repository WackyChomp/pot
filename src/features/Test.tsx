import React from 'react'
import { Button } from '@/components/ui/button'

type Props = {}

const Test = (props: Props) => {
  return (
    <div className="bg-purple-600 flex flex-col mx-auto items-center">

    <div className='text-yellow-400 font-bold'>Test is all I do here</div>

    <div className="flex items-center gap-4 p-4">
      <Button variant='default'>Button #1</Button>
      <Button variant='destructive' size='sm'>Button #2</Button>
      <Button variant='outline' size='lg'>Button #3</Button>
      <Button variant='secondary' size='sm'>Button #4</Button>
      <Button variant='ghost' size='lg'>Button #5</Button>
      <Button variant='mystery' size='xs'>Button #6</Button>
    </div>

    </div>
  )
}

export default Test