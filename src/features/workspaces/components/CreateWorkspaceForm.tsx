'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { createWorkspaceSchema } from "../schemas";

import { Input } from '@/components/ui/input';
import { DottedSeparator } from '@/components/dotted-separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl,FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';


interface CreateWorkspaceFormProps {
  onCancel?: () => void;       // instruct on closing model from submit/cancel of a form
};

export const CreateWorkspaceForm = ({ onCancel }: CreateWorkspaceFormProps) => {
  const form = useForm<z.infer<typeof createWorkspaceSchema>>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = (values: z.infer<typeof createWorkspaceSchema>) => {
    console.log({ values });
  };

  return (
    <Card className='bg-red-500 w-full h-full border-none shadow-none'>
      <CardHeader className="flex p-10">
        <CardTitle className="text-xl font-bold">
          Create a new workspace
        </CardTitle>
      </CardHeader>
      <div className="px-10">
        <DottedSeparator />
      </div>
      <CardContent className="p-9">
        <Form {...form}>
          <div className="flex flex-col gap-y-5">
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workspace Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder='Enter workspace name'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </div>
        </Form>
      </CardContent>
    </Card>
  )
}
