'use client';

import { ResponsiveModal } from '@/components/responsive-modal';
import { CreateWorkspaceForm } from './CreateWorkspaceForm';

const CreateWorkspaceModal = () => {
  return (
    <ResponsiveModal open onOpenChange={()=>{}}>
      <CreateWorkspaceForm />
    </ResponsiveModal>
  )
}

export default CreateWorkspaceModal