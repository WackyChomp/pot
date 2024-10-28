import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { DottedSeparator } from '@/components/dotted-separator'

export const SignInCard = () =>{
  return(
    <Card className="w-full h-full md:w-[490px] border-none shadow-none">
      <CardHeader className='flex items-center justify-center text-center p-10'>
        <CardTitle className='text-3xl'>
          Welcome To HERE Domain!!!
        </CardTitle>
      </CardHeader>

      <div className="px-12">
        <DottedSeparator />
      </div>
    </Card>
  )
}