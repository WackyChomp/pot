
import { DialogContent } from '@/components/ui/dialog';
import { Drawer, DrawerContent } from '@/components/ui/drawer';

interface ResponsiveModalProps{
  children: React.ReactNode;
}

export const responsiveModal = ({ children } : ResponsiveModalProps) => {
  return (
    <Drawer>
      <DrawerContent>
        <DialogContent className='overflow-y-auto max-h-[85vh]'>
          {children}
        </DialogContent>
      </DrawerContent>
    </Drawer>
  );

};