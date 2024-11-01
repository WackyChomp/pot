import Image from "next/image";
import { Button } from "@/components/ui/button";
import Test from "@/features/Test";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-blue-400 flex justify-center">

      <div className="bg-green-600 flex flex-col">

      <div className="flex flex-col mx-auto items-center">
        <div className="">POT ON TIME</div>
        <Test />
        <Button><Link href='/sign-in'>Sign In</Link></Button>
        <Button><Link href='/sign-up'>Sign Up</Link></Button>
      </div>

      <div className="flex items-center gap-4 p-4">
        <Button variant='default'>Button #1</Button>
        <Button variant='destructive' size='sm'>Button #2</Button>
        <Button variant='outline' size='lg'>Button #3</Button>
        <Button variant='secondary' size='sm'>Button #4</Button>
        <Button variant='ghost' size='lg'>Button #5</Button>
        <Button variant='mystery' size='xs'>Button #6</Button>
      </div>

      <Input />
      </div>
    </div>
  )
}
