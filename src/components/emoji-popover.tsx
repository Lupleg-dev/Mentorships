import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import data from "@emoji-mart/data";
import { Picker } from "emoji-mart";

interface EmojiPopoverProps {
  children: React.ReactNode;
  hint?: string;
  onEmojiSelect: (emoji: any) => void;
}

export const EmojiPopover = ({
  children,
  hint = "Emoji",
  onEmojiSelect,
}: EmojiPopoverProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <TooltipProvider>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <Tooltip
          open={tooltipOpen}
          onOpenChange={setTooltipOpen}
          delayDuration={50}
        >
          <PopoverTrigger asChild>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipContent className="bg-black text-white border border-white/5 ">
              <p className="font-medium text-xs">{hint}</p>{" "}
            </TooltipContent>
          </PopoverTrigger>
        </Tooltip>
        <PopoverContent className="p-0 w-full border-none shadow-none">
          {React.createElement(Picker, {
            data: data,
            onEmojiSelect: onEmojiSelect,
          })}
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  );
};
