import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferResponseType } from 'hono';
import { client } from '@/lib/rpc';

// logging out will force retetch of current user and it should appear undefined (data deleted and redirects to sign-in page)

type ResponseType = InferResponseType<typeof client.api.auth.logout["$post"]>

export const useLogout = () =>{
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation<
  ResponseType,
  Error
  >({
    mutationFn: async () => {
      const response = await client.api.auth.logout['$post']();
      return await response.json();
    },
    onSuccess: () => {
      router.refresh();       // automatically reload
      queryClient.invalidateQueries({ queryKey:['current'] });
    }
  })

  return mutation;
}