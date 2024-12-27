'use client'

import { z } from 'zod'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { updateWorkspaceSchema } from "../schemas";

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DottedSeparator } from '@/components/dotted-separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl,FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { useCreateWorkspace } from '../api/use-create-workspace';
import { useUpdateWorkspace } from '../api/use-update-workspace';

import { ImageIcon } from 'lucide-react';
import { Workspace } from '../types';


interface EditWorkspaceFormProps {
  onCancel?: () => void;       // instruct on closing model from submit/cancel of a form
  initialValues: Workspace;
};

export const EditWorkspaceForm = ({ onCancel, initialValues }: EditWorkspaceFormProps) => {
  const router = useRouter();
  const { mutate, isPending } = useCreateWorkspace();

  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof updateWorkspaceSchema>>({
    resolver: zodResolver(updateWorkspaceSchema),
    defaultValues: {
      ...initialValues,
      image_input: initialValues.imageUrl ?? "",
    },
  });

  const onSubmit = (values: z.infer<typeof updateWorkspaceSchema>) => {
    console.log({ values });

    const finalValues = {
      ...values,
      image: values.image_input instanceof File ? values.image_input : "",
    };

    mutate({ 
      form: finalValues
      param: { workspaceId: initialValues.$id }
    }, {
      onSuccess: ({ data }) =>{     // data is from useCreateWorkspace() and workspace server route.ts
        form.reset();               // reset form after creating workspace
        router.push(`/workspaces/${data.$id}`)
      }
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file) {
      form.setValue("image_input", file)
    }
  }

  return (
    <Card className='bg-red-200 w-full h-full border-none shadow-none'>
      <CardHeader className="flex p-10">
        <CardTitle className="text-xl font-bold">
          {initialValues.name}
        </CardTitle>
      </CardHeader>
      <div className="px-10">
        <DottedSeparator />
      </div>
      <CardContent className="p-9">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-5">
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workspace Name</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        placeholder='Enter workspace name'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField 
                control={form.control}
                name='image_input'
                render={({field}) => (
                  <div className='flex flex-col gap-y-6'>
                    <div className="flex items-center gap-x-10">
                      {field.value ? (
                        <div className='size-[80px] relative rounded-md overflow-hidden'>
                          <Image
                            src={field.value instanceof File 
                              ? URL.createObjectURL(field.value)
                              : field.value
                            }
                            alt='logo'
                            className='object-cover'
                            fill
                          />
                        </div>
                      ): (
                        <Avatar className='size-[80px]'>
                          <AvatarFallback>
                            <ImageIcon className='size-[40px] text-blue-600 font-bold'/>
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div className="flex flex-col">
                        <p className='text-sm'>Workspace Icon</p>
                        <p className='text-sm text-muted-foreground'>JPG, JPEG, PNG, or SVG | max 1mb</p>
                        <Input 
                          className='hidden'
                          type='file'
                          accept='.jpg, .jpeg, .png, .svg'
                          ref={inputRef}
                          disabled={isPending}
                          onChange={handleImageChange}
                        />
                        <Button 
                          type='button'
                          disabled={isPending}
                          variant='mystery'
                          size='xs'
                          className='w-fil mt-2'
                          onClick={() => inputRef.current?.click()}
                        >
                          Upload Image
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>

            <DottedSeparator className='py-10'/>

            <div className="flex items-center justify-between">
              <Button
                type='button'
                size='lg'
                variant='secondary'
                onClick={onCancel}
                disabled={isPending}
                className={cn(!onCancel && 'invisible')}
              >
                Cancel
              </Button>
              <Button
                type='submit'
                size='lg'
                disabled={isPending}
              >
                Create Workspace
              </Button>              
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}