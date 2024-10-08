import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

interface PreferencesModelProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  intialValue: string;
}

export const PreferencesModel = ({
    open,
    setOpen,
    intialValue,
}: PreferencesModelProps) => {
    const [value, setValue] = useState(intialValue);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    {value}
                </DialogTitle>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
};
