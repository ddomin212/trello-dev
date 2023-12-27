"use client";
import { CardWithList } from "@/types";
import { useCardModal } from "@/hooks/use-card-modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const CardModal = () => {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.close);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>modal</DialogContent>
    </Dialog>
  );
};
