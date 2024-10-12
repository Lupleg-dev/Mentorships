import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateChannelModal } from "../store/use-create-channel-modal";
import { Input } from "@/components/ui/input";

export const CreateChannelModal = () => {
  const [open, setOpen] = useCreateChannelModal();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new channel</DialogTitle>
        </DialogHeader>
        <form className="space-y-2">
            <Input
            value=""
            disabled={false}
            onChange={() => {}}
            required
            autoFocus
            minLength={3}
            maxLength={80}
            placeholder="e.g. LuplegDevOps"
             />

        </form>
      </DialogContent>
    </Dialog>
  );
};
