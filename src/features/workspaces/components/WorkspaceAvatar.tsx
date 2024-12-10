import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface WorkspaceAvatarProps{
  image?: string;
  name: string;
  className?: string;
}

export const WorkspaceAvatar = ({ image, name, className} : WorkspaceAvatarProps) => {
  if (image) {
    return(
      <div className={cn(
        "size-12 relative rounded-md overflow-hidden", className,
      )}>
        <Image src={image} alt={name} fill className='object-cover' />
      </div>
    )
  }

  return(
    <Avatar className={cn('size-12', className)}>
      <AvatarFallback className='bg-teal-800 text-orange-500 font-semibold text-lg'>
        {name[0]}
      </AvatarFallback>
    </Avatar>
  )
}